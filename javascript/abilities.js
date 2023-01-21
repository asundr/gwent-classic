"use strict"

var ability_dict = {
	clear: {
		name: "Clear Weather",
		description: "Removes all Weather Cards (Biting Frost, Impenetrable Fog and Torrential Rain) effects. "
	},
	frost: {
		name: "Biting Frost",
		description: "Sets the strength of all Close Combat cards to 1 for both players. "
	},
	fog: {
		name: "Impenetrable Fog",
		description: "Sets the strength of all Ranged Combat cards to 1 for both players. "
	},
	rain: {
		name: "Torrential Rain",
		description: "Sets the strength of all Siege Combat cards to 1 for both players. "
	},
	storm: {
		name: "Skellige Storm",
		description: "Reduces the Strength of all Range and Siege Units to 1. "
	},
	hero: {
		name: "Hero",
		description: "Not affected by any Special Cards or abilities. "
	},
	decoy: {
		name: "Decoy",
		description: "Swap with a card on the battlefield to return it to your hand. "
	},
	horn: {
		name: "Commander's Horn",
		description: "Doubles the strength of all unit cards in that row. Limited to 1 per row. ",
		placed: async card => await card.animate("horn")
	},
	mardroeme: {
		name: "Mardroeme",
		description: "Triggers transformation of all Berserker cards on the same row. ",
		placed: async (card, row) => {
			if (card.isLocked()) return;
			let berserkers = row.findCards(c => c.abilities.includes("berserker"));
			await Promise.all(berserkers.map(async c => await ability_dict["berserker"].placed(c, row)));
		}
	},
	berserker: {
		name: "Berserker",
		description: "Transforms into a bear when a Mardroeme card is on its row. ",
		placed: async (card, row) => {
			if (row.effects.mardroeme === 0 || card.isLocked()) return;
			row.removeCard(card);
			await row.addCard(new Card(card.target, card_dict[card.target], card.holder));
		}
	},
	scorch: {
		name: "Scorch",
		description: "Discard after playing. Kills the strongest card(s) on the battlefield. ",
		activated: async card => {	
			await ability_dict["scorch"].placed(card);
			await board.toGrave(card, card.holder.hand);
		},
		placed: async (card, row) => {
			if (card.isLocked() || game.scorchCancelled) return;
			if (row !== undefined) row.cards.splice(row.cards.indexOf(card), 1);
			let maxUnits = board.row.map(r => [r, r.maxUnits()]).filter(p => p[1].length > 0).filter(p => !p[0].isShielded());
			if (row !== undefined) row.cards.push(card);
			let maxPower = maxUnits.reduce((a,p) => Math.max(a, p[1][0].power), 0);
			let scorched = maxUnits.filter(p => p[1][0].power === maxPower);
			let cards = scorched.reduce((a, p) => a.concat(p[1].map(u => [p[0], u])), []);
			await Promise.all(cards.map(async u => await u[1].animate("scorch", true, false)));
			await Promise.all(cards.map(async u => await board.toGrave(u[1], u[0])));
		}
	},
	scorch_c: {
		name: "Scorch - Close Combat",
		description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "close", card.holder.opponent()).scorch()
	},
	scorch_r: {
		name: "Scorch - Ranged",
		description: "Destroy your enemy's strongest Ranged Combat unit(s) if the combined strength of all his or her Ranged Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "ranged", card.holder.opponent()).scorch()
	},
	scorch_s: {
		name: "Scorch - Siege",
		description: "Destroys your enemy's strongest Siege Combat unit(s) if the combined strength of all his or her Siege Combat units is 10 or more. ",
		placed: async (card) => await board.getRow(card, "siege", card.holder.opponent()).scorch()
	},
	agile: {
		name:"Agile", 
		description: "Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed. "
	},
	muster: {
		name:"Muster", 
		description: "Find any cards with the same name in your deck and play them instantly. ",
		placed: async (card) => {
			if (card.isLocked()) return;
			let pred = c => c.target === card.target;
			let units = card.holder.hand.getCards(pred).map(x => [card.holder.hand, x])
				.concat(card.holder.deck.getCards(pred).map(x => [card.holder.deck, x]));
			if (units.length === 0) return;
			await card.animate("muster");
			if (card.row === "agile") await Promise.all(units.map(async p => await board.addCardToRow(p[1], card.currentLocation, p[1].holder, p[0])));
			else await Promise.all(units.map(async p => await board.addCardToRow(p[1], p[1].row, p[1].holder, p[0])));
		}
	},
	spy: {
		name: "Spy",
		description: "Place on your opponent's battlefield (counts towards your opponent's total) and draw 2 cards from your deck. ",
		placed: async (card) => {
			if (card.isLocked()) return;
			await card.animate("spy");
			for (let i = 0; i < 2; i++) {
				if (card.holder.deck.cards.length > 0) await card.holder.deck.draw(card.holder.hand);
			}
			card.holder = card.holder.opponent();
		}
	},
	medic: {
		name: "Medic",
		description: "Choose one card from your discard pile and play it instantly (no Heroes or Special Cards). ",
		placed: async (card) => {
			if (card.isLocked() || (card.holder.grave.findCards(c => c.isUnit()) <= 0)) return;
			let grave = board.getRow(card, "grave", card.holder);
			let respawns = [];
			if (game.randomRespawn) {
				for (var i = 0; i < game.medicCount; i++) {
					if (card.holder.grave.findCards(c => c.isUnit()).length > 0) {
						let res = grave.findCardsRandom(c => c.isUnit())[0];
						grave.removeCard(res);
						grave.addCard(res);
						await res.animate("medic");
						await res.autoplay(grave);
					}
				}
				return;
			} else if (card.holder.controller instanceof ControllerAI) {
				for (var i = 0; i < game.medicCount; i++) {
					if (card.holder.grave.findCards(c => c.isUnit()).length > 0) {
						let res = card.holder.controller.medic(card, grave);
						grave.removeCard(res);
						grave.addCard(res);
						await res.animate("medic");
						await res.autoplay(grave);
					}
				}
				return;
			}
			await ui.queueCarousel(card.holder.grave, game.medicCount, (c, i) => respawns.push({ card: c.cards[i] }), c => c.isUnit(), true);
			await Promise.all(respawns.map(async wrapper => {
				let res = wrapper.card;
				grave.removeCard(res);
				grave.addCard(res);
				await res.animate("medic");
				await res.autoplay(grave);
			}));
		}
	},
	morale: {
		name: "Morale Boost",
		description: "Adds +1 to all units in the row (excluding itself). ",
		placed: async card => await card.animate("morale")
	},
	bond: {
		name: "Tight Bond",
		description: "Place next to a card with the same name to double the strength of both cards. ",
		placed: async card => {
			if (card.isLocked()) return;
			let bonds = card.currentLocation.findCards(c => c.target === card.target).filter(c => c.abilities.includes("bond")).filter(c => !c.isLocked());
			if (bonds.length > 1) await Promise.all(bonds.map(c => c.animate("bond")));
		}
	},
	avenger: {
		name: "Avenger",
		description: "When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place. ",
		removed: async (card) => {
			if (game.over || game.roundHistory.length > 2 || card.isLocked()) return;
			if (card_dict[card.target]["ability"].includes("muster") && (card.holder.deck.findCards(c => c.key === card.target).length === 0 && card.holder.hand.findCards(c => c.key === card.target).length === 0)) {
				for (let i = 0; i < card_dict[card.target]["count"]; i++) {
					let avenger = new Card(card.target, card_dict[card.target], card.holder);
					avenger.removed.push(() => setTimeout(() => avenger.holder.grave.removeCard(avenger), 2000));
					if (card.target != card.key) await board.addCardToRow(avenger, avenger.row, card.holder);
				}
			} else if (card.target === card.key) await board.moveTo(card, card.row, card.holder.grave);
			else {
				let avenger;
				if (card.holder.deck.findCards(c => c.key === card.target).length) {
					avenger = card.holder.deck.findCard(c => c.key === card.target);
					await board.moveTo(avenger, avenger.row, card.holder.deck);
				} else if (card.holder.hand.findCards(c => c.key === card.target).length) {
					avenger = card.holder.hand.findCard(c => c.key === card.target);
					await board.moveTo(avenger, avenger.row, card.holder.hand);
				} else {
					avenger = new Card(card.target, card_dict[card.target], card.holder);
					await board.addCardToRow(avenger, avenger.row, card.holder);
					if (card.target != card.key) avenger.removed.push(() => setTimeout(() => avenger.holder.grave.removeCard(avenger), 2000));
				}
			}
		},
		weight: (card) => {
			if (game.roundHistory.length > 2) return 1;
			return Number(card_dict[card.target]["strength"]);
		}
	},
	cintra_slaughter: {
		name: "Slaughter of Cintra",
		description: "When using the Slaugther of Cintra special card, destroy all units on your side of the board having the Slaughter of Cintra ability then draw as many cards as units destroyed.",
		activated: async card => {
			let targets = board.row.map(r => [r, r.findCards(c => c.abilities.includes("cintra_slaughter")).filter(c => c.holder === card.holder).filter(c => !c.isLocked())]);
			let cards = targets.reduce((a, p) => a.concat(p[1].map(u => [p[0], u])), []);
			let nb_draw = cards.length;
			await Promise.all(cards.map(async u => await u[1].animate("scorch", true, false)));
			await Promise.all(cards.map(async u => await board.toGrave(u[1], u[0])));
			await board.toGrave(card, card.holder.hand);
			for (let i = 0; i < nb_draw; i++) {
				if (card.holder.deck.cards.length > 0) await card.holder.deck.draw(card.holder.hand);
			}
		},
		weight: (card) => 30
	},
	foltest_king: {
		description: "Pick an Impenetrable Fog card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Impenetrable Fog");
			if (out) await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "fog")
	},
	foltest_lord: {
		description: "Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play.",
		activated: async () => {
			tocar("clear", false);
			await weather.clearWeather()
		},
		weight: (card, ai) =>  ai.weightCard(card_dict["spe_clear"])
	},
	foltest_siegemaster: {
		description: "Doubles the strength of all your Siege units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "siege", card.holder).leaderHorn(card),
		weight: (card, ai) => ai.weightHornRow(card, board.getRow(card, "siege", card.holder))
	},
	foltest_steelforged: {
		description: "Destroy your enemy's strongest Siege unit(s) if the combined strength of all his or her Siege units is 10 or more.",
		activated: async card => await ability_dict["scorch_s"].placed(card),
		weight: (card, ai, max) => ai.weightScorchRow(card, max, "siege")
	},
	foltest_son: {
		description: "Destroy your enemy's strongest Ranged Combat unit(s) if the combined strength of all his or her Ranged Combat units is 10 or more.",
		activated: async card => await ability_dict["scorch_r"].placed(card),
		weight: (card, ai, max) => ai.weightScorchRow(card, max, "ranged")
	},
	emhyr_imperial: {
		description: "Pick a Torrential Rain card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Torrential Rain");
			if (out) await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "rain")
	},
	emhyr_emperor: {
		description: "Look at 3 random cards from your opponent's hand.",
		activated: async card => {
			if (card.holder.controller instanceof ControllerAI) return;
			let container = new CardContainer();
			container.cards = card.holder.opponent().hand.findCardsRandom(() => true, 3);
			try {
				Carousel.curr.cancel();
			} catch (err) {}
			await ui.viewCardsInContainer(container);
		},
		weight: card => {
			let count = card.holder.opponent().hand.cards.length;
			return count === 0 ? 0 : Math.max(10, 10 * (8 - count));
		}
	},
	emhyr_whiteflame: {
		description: "Cancel your opponent's Leader Ability."
	},
	emhyr_relentless: {
		description: "Draw a card from your opponent's discard pile.",
		activated: async card => {
			let grave = board.getRow(card, "grave", card.holder.opponent());
			if (grave.findCards(c => c.isUnit()).length === 0) return;
			if (card.holder.controller instanceof ControllerAI) {
				let newCard = card.holder.controller.medic(card, grave);
				newCard.holder = card.holder;
				await board.toHand(newCard, grave);
				return;
			}
			try {
				Carousel.curr.cancel();
			} catch (err) {}
			await ui.queueCarousel(grave, 1, (c,i) => {
				let newCard = c.cards[i];
				newCard.holder = card.holder;
				board.toHand(newCard, grave);
			}, c => c.isUnit(), true);
		},
		weight: (card, ai, max, data) => ai.weightMedic(data, 0, card.holder.opponent())
	},
	emhyr_invader: {
		description: "Abilities that restore a unit to the battlefield restore a randomly-chosen unit. Affects both players.",
		gameStart: () => game.randomRespawn = true
	},
	eredin_commander: {
		description: "Double the strength of all your Close Combat units (unless a Commander's horn is 	also present on that row).",
		activated: async card => await board.getRow(card, "close", card.holder).leaderHorn(card),
		weight: (card, ai) => ai.weightHornRow(card, board.getRow(card, "close", card.holder))
	},
	eredin_bringer_of_death: {
		name: "Eredin : Bringer of Death",
		description: "Restore a card from your discard pile to your hand.",
		activated: async card => {
			let newCard;
			if (card.holder.controller instanceof ControllerAI) newCard = card.holder.controller.medic(card, card.holder.grave);
			else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
				await ui.queueCarousel(card.holder.grave, 1, (c,i) => newCard = c.cards[i], c => c.isUnit(), false, false);
			}
			if (newCard) await board.toHand(newCard, card.holder.grave);
		},
		weight: (card, ai, max, data) => ai.weightMedic(data, 0, card.holder)
	},
	eredin_destroyer: {
		description: "Discard 2 cards and draw 1 card of your choice from your deck.",
		activated: async (card) => {
			let hand = board.getRow(card, "hand", card.holder);
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				let cards = card.holder.controller.discardOrder(card).splice(0, 2).filter(c => c.basePower < 7);
				await Promise.all(cards.map(async c => await board.toGrave(c, card.holder.hand)));
				card.holder.deck.draw(card.holder.hand);
				return;
			} else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
			}
			await ui.queueCarousel(hand, 2, (c,i) => board.toGrave(c.cards[i], c), () => true);
			await ui.queueCarousel(deck, 1, (c,i) => board.toHand(c.cards[i], deck), () => true, true);
		},
		weight: (card, ai) => {
			let cards = ai.discardOrder(card).splice(0,2).filter(c => c.basePower < 7);
			if (cards.length < 2) return 0;
			return cards[0].abilities.includes("muster") ? 50 : 25;
		}
	},
	eredin_king: {
		description: "Pick any weather card from your deck and play it instantly.",
		activated: async card => {
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) await ability_dict["eredin_king"].helper(card).card.autoplay(card.holder.deck);
			else {
				try {
					Carousel.curr.cancel();
				} catch (err) { }
				await ui.queueCarousel(deck, 1, (c,i) => board.toWeather(c.cards[i], deck), c => c.faction === "weather", true);
			}
		},
		weight: (card, ai, max) => ability_dict["eredin_king"].helper(card).weight,
		helper: card => {
			let weather = card.holder.deck.cards.filter(c => c.row === "weather").reduce((a,c) => a.map(c => c.name).includes(c.name) ? a : a.concat([c]), []);
			let out, weight = -1;
			weather.forEach(c => {
				let w = card.holder.controller.weightWeatherFromDeck(c, c.abilities[0]);
				if (w > weight) {
					weight = w;
					out = c;
				}
			});
			return {
				card: out,
				weight: weight
			};
		}
	},
	eredin_treacherous: {
		description: "Doubles the strength of all spy cards (affects both players).",
		gameStart: () => game.spyPowerMult = 2
	},
	francesca_queen: {
		description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more.",
		activated: async card => await ability_dict["scorch_c"].placed(card),
		weight: (card, ai, max) => ai.weightScorchRow(card, max, "close")
	},
	francesca_beautiful: {
		description: "Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "ranged", card.holder).leaderHorn(card),
		weight: (card, ai) => ai.weightHornRow(card, board.getRow(card, "ranged", card.holder))
	},
	francesca_daisy: {
		description: "Draw an extra card at the beginning of the battle.",
		placed: card => game.gameStart.push(() => {
			let draw = card.holder.deck.removeCard(0);
			card.holder.hand.addCard(draw);
			return true;
		})
	},
	francesca_pureblood: {
		description: "Pick a Biting Frost card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Biting Frost");
			if (out) await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "frost")
	},
	francesca_hope: {
		description: "Move agile units to whichever valid row maximizes their strength (don't move units already in optimal row).",
		activated: async card => {
			let close = board.getRow(card, "close");
			let ranged =  board.getRow(card, "ranged");
			let cards = ability_dict["francesca_hope"].helper(card);
			await Promise.all(cards.map(async p => await board.moveTo(p.card, p.row === close ? ranged : close, p.row)));
		},
		weight: card => {
			let cards = ability_dict["francesca_hope"].helper(card);
			return cards.reduce((a,c) => a + c.weight, 0);
		},
		helper: card => {
			let close = board.getRow(card, "close");
			let ranged = board.getRow(card, "ranged");
			return validCards(close).concat(validCards(ranged));
			
			function validCards(cont) {
				return cont.findCards(c => c.row === "agile").filter(c => dif(c,cont) > 0).map(c => ({
					card:c, row:cont, weight:dif(c,cont)
				}))
			}
			
			function dif(card, source) {
				return (source === close ? ranged : close).calcCardScore(card) - card.power;
			}
		}
	},
	crach_an_craite: {
		description: "Shuffle all cards from each player's graveyard back into their decks.",
		activated: async card => {
			Promise.all(card.holder.grave.cards.map(c => board.toDeck(c, card.holder.grave)));
			await Promise.all(card.holder.opponent().grave.cards.map(c => board.toDeck(c, card.holder.opponent().grave)));
		},
		weight: (card, ai, max, data) => {
			if (game.roundCount < 2) return 0;
			let medics = card.holder.hand.findCard(c => c.abilities.includes("medic"));
			if (medics !== undefined) return 0;
			let spies = card.holder.hand.findCard(c => c.abilities.includes("spy"));
			if (spies !== undefined) return 0;
			if (card.holder.hand.findCard(c => c.abilities.includes("decoy")) !== undefined && (data.medic.length || data.spy.length && card.holder.deck.findCard(c => c.abilities.includes("medic")) !== undefined)) return 0;
			return 15;
		}
	},
	king_bran: {
		description: "Units only lose half their Strength in bad weather conditions.",
		placed: card => {
			for (var i = 0; i < board.row.length; i++) {
				if ((card.holder === player_me && i > 2) || (card.holder === player_op && i < 3)) board.row[i].halfWeather = true;
			}
		}
	},
	queen_calanthe: {
		description: "Play a unit then draw a card from you deck.",
		activated: async card => {
			let units = card.holder.hand.cards.filter(c => c.isUnit());
			if (units.length === 0) return;
			let wrapper = {
				card: null
			};
			if (card.holder.controller instanceof ControllerAI) wrapper.card = units[randomInt(units.length)];
			else await ui.queueCarousel(board.getRow(card, "hand", card.holder), 1, (c, i) => wrapper.card = c.cards[i], c => c.isUnit(), true);
			wrapper.card.autoplay();
			card.holder.hand.removeCard(wrapper.card);
			if (card.holder.deck.cards.length > 0) await card.holder.deck.draw(card.holder.hand);
		},
		weight: (card, ai) => {
			let units = card.holder.hand.cards.filter(c => c.isUnit());
			if (units.length === 0) return 0;
			return 15;
		}
	},
	fake_ciri: {
		description: "Discard a card from your hand and then draw two cards from your deck.",
		activated: async card => {
			if (card.holder.hand.cards.length === 0) return;
			let hand = board.getRow(card, "hand", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				let cards = card.holder.controller.discardOrder(card).splice(0, 1).filter(c => c.basePower < 7);
				await Promise.all(cards.map(async c => await board.toGrave(c, card.holder.hand)));
			} else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
				await ui.queueCarousel(hand, 1, (c, i) => board.toGrave(c.cards[i], c), () => true);
			}
			for (let i = 0; i < 2; i++) {
				if (card.holder.deck.cards.length > 0) await card.holder.deck.draw(card.holder.hand);
			}
		},
		weight: (card, ai) => {
			if (card.holder.hand.cards.length === 0) return 0;
			return 15;
		}
	},
	radovid_stern: {
		description: "Discard 2 cards and draw 1 card of your choice from your deck.",
		activated: async (card) => {
			let hand = board.getRow(card, "hand", card.holder);
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				let cards = card.holder.controller.discardOrder(card).splice(0, 2).filter(c => c.basePower < 7);
				await Promise.all(cards.map(async c => await board.toGrave(c, card.holder.hand)));
				card.holder.deck.draw(card.holder.hand);
				return;
			} else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
			}
			await ui.queueCarousel(hand, 2, (c, i) => board.toGrave(c.cards[i], c), () => true);
			await ui.queueCarousel(deck, 1, (c, i) => board.toHand(c.cards[i], deck), () => true, true);
		},
		weight: (card, ai) => {
			let cards = ai.discardOrder(card).splice(0, 2).filter(c => c.basePower < 7);
			if (cards.length < 2) return 0;
			return cards[0].abilities.includes("muster") ? 50 : 25;
		}
	},
	radovid_ruthless: {
		description: "Cancel the scorch ability for one round",
		activated: async card => {
			game.scorchCancelled = true;
			await ui.notification("north-scorch-cancelled", 1200);
			game.roundStart.push(async () => {
				game.scorchCancelled = false;
				return true;
			});
		}
	},
	vilgefortz_magician_kovir: {
		description: "Halves the strength of all spy cards (affects both players).",
		gameStart: () => game.spyPowerMult = 0.5
	},
	cosimo_malaspina: {
		description: "Destroy your enemy's strongest Melee unit(s) if the combined strength of all his or her Melee units is 10 or more.",
		activated: async card => await ability_dict["scorch_c"].placed(card),
		weight: (card, ai, max) => ai.weightScorchRow(card, max, "close")
	},
	resilience: {
		name: "Resilience",
		description: "Remains on the board for the following round if another unit on your side of the board had an ability in common.",
		placed: async card => {
			game.roundEnd.push(async () => {
				if (card.isLocked()) return;
				let units = card.holder.getAllRowCards().filter(c => c.abilities.includes(card.abilities.at(-1)));
				if (units.length < 2) return;
				card.noRemove = true;
				await card.animate("resilience");
				game.roundStart.push(async () => {
					delete card.noRemove;
					let school = card.abilities.at(-1);
					if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
					card.holder.effects["witchers"][school]++;
					return true;
				});
			});
		}
	},
	witcher_wolf_school: {
		name: "Wolf School of Witchers",
		description: "Each unit of this witcher school is boosted by 2 for each card of this given school.",
		placed: async card => {
			let school = card.abilities.at(-1);
			if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
			card.holder.effects["witchers"][school]++;
		},
		removed: async card => {
			let school = card.abilities.at(-1);
			card.holder.effects["witchers"][school]--;
		}
	},
	witcher_viper_school: {
		name: "Viper School of Witchers",
		description: "Each unit of this witcher school is boosted by 2 for each card of this given school.",
		placed: async card => {
			let school = card.abilities.at(-1);
			if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
			card.holder.effects["witchers"][school]++;
		},
		removed: async card => {
			let school = card.abilities.at(-1);
			card.holder.effects["witchers"][school]--;
		}
	},
	witcher_bear_school: {
		name: "Bear School of Witchers",
		description: "Each unit of this witcher school is boosted by 2 for each card of this given school.",
		placed: async card => {
			let school = card.abilities.at(-1);
			if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
			card.holder.effects["witchers"][school]++;
		},
		removed: async card => {
			let school = card.abilities.at(-1);
			card.holder.effects["witchers"][school]--;
		}
	},
	witcher_cat_school: {
		name: "Cat School of Witchers",
		description: "Each unit of this witcher school is boosted by 2 for each card of this given school.",
		placed: async card => {
			let school = card.abilities.at(-1);
			if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
			card.holder.effects["witchers"][school]++;
		},
		removed: async card => {
			let school = card.abilities.at(-1);
			card.holder.effects["witchers"][school]--;
		}
	},
	witcher_griffin_school: {
		name: "Griffin School of Witchers",
		description: "Each unit of this witcher school is boosted by 2 for each card of this given school.",
		placed: async card => {
			let school = card.abilities.at(-1);
			if (!card.holder.effects["witchers"][school]) card.holder.effects["witchers"][school] = 0;
			card.holder.effects["witchers"][school]++;
		},
		removed: async card => {
			let school = card.abilities.at(-1);
			card.holder.effects["witchers"][school]--;
		}
	},
	shield: {
		name: "Shield",
		description: "Protects units in the row from all abilities except weather effects.",
		weight: (card) => 30
	},
	seize: {
		name: "Seize",
		description: "Move the Melee unit(s) with the lowest strength on your side of the board/ Their abilities won't work anymore.",
		activated: async card => {
			let opCloseRow = board.getRow(card, "close", card.holder.opponent());
			let meCloseRow = board.getRow(card, "close", card.holder);
			if (opCloseRow.isShielded()) return;
			let units = opCloseRow.minUnits();
			if (units.length === 0) return;
			await Promise.all(units.map(async c => await c.animate("seize")));
			units.forEach(async c => {
				c.holder = card.holder;
				await board.moveToNoEffects(c, meCloseRow, opCloseRow);
			});
			await board.toGrave(card, card.holder.hand);
		},
		weight: (card) => {
			if (card.holder.opponent().getAllRows()[0].isShielded()) return 0;
			return card.holder.opponent().getAllRows()[0].minUnits().reduce((a, c) => a + c.power, 0) * 2
		}
	},
	lock: {
		name: "Lock",
		description: "Lock/cancels the ability of the next unit played in that row (ignores units without abilities and heroes).",
		weight: (card) => 20
	},
	knockback: {
		name: "Knockback",
		description: "Pushes all units of the selected row (Melee or Ranged) or row back towards the Siege row, ignores shields.",
		activated: async (card, row) => {
			let units = row.findCards(c => c.isUnit());
			if (units.length > 0) {
				let targetRow;
				for (var i = 0; i < board.row.length; i++) {
					if (board.row[i] === row) {
						if (i < 3) targetRow = board.row[Math.max(0, i - 1)];
						else targetRow = board.row[Math.min(5, i + 1)];
					}
				}
				await Promise.all(units.map(async c => await c.animate("knockback")));
				units.map(async c => {
					if (c.abilities.includes("bond") || c.abilities.includes("morale") || c.abilities.includes("horn")) await board.moveTo(c, targetRow, row);
					else await board.moveToNoEffects(c, targetRow, row);
				});
			}
			await board.toGrave(card, card.holder.hand);
		},
		weight: (card) => {
			if (board.getRow(card, "close", card.holder.opponent()).cards.length + board.getRow(card, "ranged", card.holder.opponent()).cards.length === 0) return 0;
			let score = 0;
			if (board.getRow(card, "close", card.holder.opponent()).cards.length > 0 && (
					board.getRow(card, "close", card.holder.opponent()).effects.horn > 0 ||
					board.getRow(card, "ranged", card.holder.opponent()).effects.weather ||
					Object.keys(board.getRow(card, "close", card.holder.opponent()).effects.bond).length > 1 ||
					board.getRow(card, "close", card.holder.opponent()).isShielded()
				)
			) score = Math.floor(board.getRow(card, "close", card.holder.opponent()).cards.filter(c => c.isUnit()).reduce((a, c) => a + c.power, 0) * 0.5);
			if (board.getRow(card, "ranged", card.holder.opponent()).cards.length > 0 && (
					board.getRow(card, "ranged", card.holder.opponent()).effects.horn > 0 ||
					board.getRow(card, "siege", card.holder.opponent()).effects.weather ||
					Object.keys(board.getRow(card, "ranged", card.holder.opponent()).effects.bond).length > 1 ||
					board.getRow(card, "ranged", card.holder.opponent()).isShielded()
				)
			) score = Math.floor(board.getRow(card, "close", card.holder.opponent()).cards.filter(c => c.isUnit()).reduce((a, c) => a + c.power, 0) * 0.5);
			return Math.max(1, score);
		}
	},
	alzur_maker: {
		description: "Destroy one of your units on the board and summon a Koshchey.",
		activated: (card, player) => {
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if(!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		target: "wu_koshchey",
		weight: (card, ai, max) => {
			if (ai.player.getAllRowCards().filter(c => c.isUnit()).length === 0) return 0;
			return ai.weightScorchRow(card, max, "close");
		}
	},
	vilgefortz_sorcerer: {
		description: "Clear all weather effects in play.",
		activated: async () => {
			tocar("clear", false);
			await weather.clearWeather()
		},
		weight: (card, ai) => ai.weightCard(card_dict["spe_clear"])
	},
	anna_henrietta_duchess: {
		description: "Destroy one Commander's Horn in any opponent's row of your choice.",
		activated: (card, player) => {
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if (!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		weight: (card, ai) => {
			let horns = card.holder.opponent().getAllRows().filter(r => r.special.findCards(c => c.abilities.includes("horn")).length > 0).sort((a, b) => b.total - a.total);
			if (horns.length === 0) return 0;
			return horns[0].total;
		}
	},
	toussaint_wine: {
		name: "Toussaint Wine",
		description: "Placed on Melee or Ranged row, boosts all units of the selected row by two. Limited to one per row.",
		placed: async card => await card.animate("morale")
	},
	anna_henrietta_ladyship: {
		description: "Restore a unit from your discard pile and play it immediatly.",
		activated: async card => {
			let newCard;
			if (card.holder.controller instanceof ControllerAI) newCard = card.holder.controller.medic(card, card.holder.grave);
			else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
				await ui.queueCarousel(card.holder.grave, 1, (c, i) => newCard = c.cards[i], c => c.isUnit(), false, false);
			}
			if (newCard) await newCard.autoplay(card.holder.grave);
		},
		weight: (card, ai, max, data) => ai.weightMedic(data, 0, card.holder)
	},
	anna_henrietta_grace: {
		description: "Cancel Decoy ability for one round.",
		activated: async card => {
			game.decoyCancelled = true;
			await ui.notification("toussaint-decoy-cancelled", 1200);
			game.roundStart.push(async () => {
				game.decoyCancelled = false;
				return true;
			});
		},
		weight: (card) => game.decoyCancelled ? 0 : 10
	},
	meve_princess: {
		description: "If the opponent has a total of 10 or higher on one row, destroy that row's strongest card(s) (affects only the opponent's side of the battle field).",
		activated: async (card, player) => {
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if (!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		weight: (card, ai, max) => {
			return Math.max(ai.weightScorchRow(card, max, "close"), ai.weightScorchRow(card, max, "ranged"), ai.weightScorchRow(card, max, "siege"));
		}
	},
	shield_c: {
		name: "Melee Shield",
		description: "Protects units in the Melee row from all abilities except weather effects.",
		weight: (card) => 20
	},
	shield_r: {
		name: "Ranged Shield",
		description: "Protects units in the Ranged row from all abilities except weather effects.",
		weight: (card) => 20
	},
	shield_s: {
		name: "Siege Shield",
		description: "Protects units in the Siege row from all abilities except weather effects.",
		weight: (card) => 20
	},
	meve_white_queen: {
		description: "All medic cards can choose two unit cards from the discard pile (affects both players).",
		gameStart: () => game.medicCount = 2
	},
	carlo_varese: {
		description: "If the opponent has a total of 10 or higher on one row, destroy that row's strongest card(s) (affects only the opponent's side of the battle field).",
		activated: async (card, player) => {
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if (!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		weight: (card, ai, max) => {
			return Math.max(ai.weightScorchRow(card, max, "close"), ai.weightScorchRow(card, max, "ranged"), ai.weightScorchRow(card, max, "siege"));
		}
	},
	francis_bedlam: {
		description: "Send all spy unit cards to the grave of the side they are on.",
		activated: async (card, player) => {
			let op_spies = card.holder.opponent().getAllRowCards().filter(c => c.isUnit() && c.abilities.includes("spy"));
			let me_spies = card.holder.getAllRowCards().filter(c => c.isUnit() && c.abilities.includes("spy"));
			await op_spies.map(async c => await board.toGrave(c, c.currentLocation));
			await me_spies.map(async c => await board.toGrave(c, c.currentLocation));
		},
		weight: (card, ai, max) => {
			let op_spies = card.holder.opponent().getAllRowCards().filter(c => c.isUnit() && c.abilities.includes("spy")).reduce((a,c) => a + c.power,0);
			let me_spies = card.holder.getAllRowCards().filter(c => c.isUnit() && c.abilities.includes("spy")).reduce((a, c) => a + c.power,0);
			return Math.max(0, op_spies - me_spies);
		}
	},
	cyprian_wiley: {
		description: "Seize the unit(s) with the lowest strength of the opponents melee row.",
		activated: async card => {
			let opCloseRow = board.getRow(card, "close", card.holder.opponent());
			let meCloseRow = board.getRow(card, "close", card.holder);
			if (opCloseRow.isShielded()) return;
			let units = opCloseRow.minUnits();
			if (units.length === 0) return;
			await Promise.all(units.map(async c => await c.animate("seize")));
			units.forEach(async c => {
				c.holder = card.holder;
				await board.moveToNoEffects(c, meCloseRow, opCloseRow);
			});
		},
		weight: (card) => {
			if (card.holder.opponent().getAllRows()[0].isShielded()) return 0;
			return card.holder.opponent().getAllRows()[0].minUnits().reduce((a, c) => a + c.power, 0) * 2
		}
	},
	gudrun_bjornsdottir: {
		description: "Summon Flyndr's Crew",
		activated: async (card, player) => {
			let new_card = new Card("sy_flyndr_crew", card_dict["sy_flyndr_crew"], player);
			await board.addCardToRow(new_card, new_card.row, card.holder);
		},
		weight: (card, ai, max) => {
			return card.holder.getAllRows()[0].cards.length + Number(card_dict["sy_flyndr_crew"]["strength"]);
		}
	},
	cyrus_hemmelfart: {
		description: "Play a Dimeritum Shackles card in any of the opponent's row.",
		activated: async (card, player) => {
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if (!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		weight: (card) => 20
	},
	azar_javed: {
		description: "Destroy the enemy's weakest hero card (max 1 card).",
		activated: async (card, player) => {
			let heroes = player.opponent().getAllRowCards().filter(c => c.hero);
			if (heroes.length === 0) return;
			let target = heroes.sort((a, b) => a.power - b.power)[0];
			await target.animate("scorch", true, false);
			await board.toGrave(target, target.currentLocation);
		},
		weight: (card, ai, max) => {
			let heroes = card.holder.opponent().getAllRowCards().filter(c => c.hero);
			if (heroes.length === 0) return 0;
			return heroes.sort((a, b) => a.power - b.power)[0].power;
		}
	},
	bank: {
		name: "Bank",
		description: "Draw a card from your deck.",
		activated: async card => {
			card.holder.deck.draw(card.holder.hand);
			await board.toGrave(card, card.holder.hand);
		},
		weight: (card) => 20
	},
	witch_hunt: {
		name: "Witch Hunt",
		description: "Destroy the weakest unit(s) on the opposite row",
		placed: async card => {
			let row = card.currentLocation.getOppositeRow();
			if (row.isShielded() || game.scorchCancelled) return;
			let units = row.minUnits();
			await Promise.all(units.map(async c => await c.animate("scorch", true, false)));
			await Promise.all(units.map(async c => await board.toGrave(c, row)));
		}
	},
	zerrikanterment: {
		description: "Amount of worshippers boost is doubled.",
		gameStart: () => game.whorshipBoost *= 2
	},
	baal_zebuth: {
		description: "Select 2 cards from your opponent's discard pile and shuffle them back into his/her deck.",
		activated: async (card) => {
			let grave = card.holder.opponent().grave;
			if (card.holder.controller instanceof ControllerAI) {
				let cards = grave.findCardsRandom(false,2);
				await Promise.all(cards.map(async c => await board.toDeck(c, c.holder.grave)));
				return;
			} else {
				try {
					Carousel.curr.exit();
				} catch (err) {}
			}
			await ui.queueCarousel(grave, 2, (c, i) => board.toDeck(c.cards[i], c), () => true);
		},
		weight: (card) => {
			if (card.holder.opponent().grave.cards.length < 5) return 0;
			else return 20;
		}
	},
	rarog: {
		description: "Draw a random card from the discard pile to your hand (any card) and then shuffle the rest back into the deck.",
		activated: async (card) => {
			if (card.holder.grave.cards.length === 0) return;
			let grave = card.holder.grave;
			let c = grave.findCardsRandom(false, 1)[0];
			await board.toHand(c, c.holder.grave);
			Promise.all(card.holder.grave.cards.map(c => board.toDeck(c, card.holder.grave)));
		},
		weight: (card) => {
			let medics = card.holder.hand.cards.filter(c => c.abilities.includes("medic"));
			if (medics.length > 0 || card.holder.grave.cards.length == 0) return 0;
			else return 15;
		}
	},
	whorshipper: {
		name: "Whorshipper",
		description: "Boost by 1 all whorshipped units on your side of the board.",
		placed: async card => {
			if (card.isLocked()) return;
			card.holder.effects["whorshippers"]++;
		},
		removed: async card => {
			if (card.isLocked()) return;
			card.holder.effects["whorshippers"]--;
		},
		weight: (card) => {
			let wcards = card.holder.getAllRowCards().filter(c => c.abilities.includes("whorshipped"));
			return wcards.length * game.whorshipBoost;
		}
	},
	whorshipped: {
		name: "Whorshipped",
		description: "Boosted by 1 by all whorshippers present on your side of the board.",
	},
	inspire: {
		name: "Inspire",
		description: "All units with Inspire ability take the highest base strength of the Inspire units on your side of the board. Still affected by weather.",
	},
};