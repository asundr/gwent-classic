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
		name: "hero",
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
			let berserkers = row.findCards(c => c.abilities.includes("berserker"));
			await Promise.all(berserkers.map(async c => await ability_dict["berserker"].placed(c, row)));
		}
	},
	berserker: {
		name: "Berserker",
		description: "Transforms into a bear when a Mardroeme card is on its row. ",
		placed: async (card, row) => {
			if (row.effects.mardroeme === 0)
				return;
			row.removeCard(card);
			let cardId = card.name.indexOf("Young") === -1 ? 206 : 207;
			await row.addCard(new Card(card_dict[cardId], card.holder));
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
			if (row !== undefined)
				row.cards.splice( row.cards.indexOf(card), 1);
			let maxUnits = board.row.map( r => [r,r.maxUnits()] ).filter( p => p[1].length > 0);
			if (row !== undefined)
				row.cards.push(card);
			let maxPower = maxUnits.reduce( (a,p) => Math.max(a, p[1][0].power), 0 );
			let scorched = maxUnits.filter( p => p[1][0].power === maxPower);
			let cards = scorched.reduce( (a,p) => a.concat( p[1].map(u => [p[0], u])), []);
			
			await Promise.all(cards.map( async u => await u[1].animate("scorch", true, false)) );
			await Promise.all(cards.map( async u => await board.toGrave(u[1], u[0])) );
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
		name:"agile", 
		description: "Can be placed in either the Close Combat or the Ranged Combat row. Cannot be moved once placed. "
	},
	muster: {
		name:"muster", 
		description: "Find any cards with the same name in your deck and play them instantly. ",
		placed: async (card) => {
			let i = card.name.indexOf('-');
			let cardName = i === -1 ?  card.name : card.name.substring(0, i);
			let pred = c => c.name.startsWith(cardName);
			let units = card.holder.hand.getCards(pred).map(x => [card.holder.hand, x])
			.concat(card.holder.deck.getCards(pred).map( x => [card.holder.deck, x] ) );
			if (units.length === 0)
				return;
			await card.animate("muster");
			await Promise.all( units.map( async p =>  await board.addCardToRow(p[1], p[1].row, p[1].holder, p[0])));
		}
	},
	spy: {
		name: "spy",
		description: "Place on your opponent's battlefield (counts towards your opponent's total) and draw 2 cards from your deck. ",
		placed: async (card) => {
			await card.animate("spy");
			for (let i=0;i<2;i++) {
				if (card.holder.deck.cards.length > 0)
					await card.holder.deck.draw(card.holder.hand);
			}
			card.holder = card.holder.opponent();
		}
	},
	medic: {
		name: "medic",
		description: "Choose one card from your discard pile and play it instantly (no Heroes or Special Cards). ",
		placed: async (card) => {
			let grave = board.getRow(card, "grave", card.holder);
			let units = card.holder.grave.findCards(c => c.isUnit());
			if (units.length <= 0)
				return;
			let wrapper = {card : null};
			if (game.randomRespawn) {
				 wrapper.card = grave.findCardsRandom(c => c.isUnit())[0];
			} else if (card.holder.controller instanceof ControllerAI)
				wrapper.card =  card.holder.controller.medic(card, grave);
			else
				await ui.queueCarousel(card.holder.grave, 1, (c, i) => wrapper.card=c.cards[i], c => c.isUnit(), true);
			let res = wrapper.card;
			grave.removeCard(res);
			grave.addCard(res);
			await res.animate("medic");
			await res.autoplay(grave);
		}
	},
	morale: {
		name: "Morale",
		description: "Adds +1 to all units in the row (excluding itself). ",
		placed: async card => await card.animate("morale")
	},
	bond: {
		name: "Tight Bond",
		description: "Place next to a card with the same name to double the strength of both cards. ",
		placed: async card => {
			let bonds = board.getRow(card, card.row, card.holder).findCards(c => c.name === card.name);
			if (bonds.length > 1)
				await Promise.all( bonds.map(c => c.animate("bond")) );
		}
	},
	avenger: {
		name: "Avenger",
		description: "When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place. ",
		removed: async (card) => {
			let bdf = new Card(card_dict[21], card.holder);
			bdf.removed.push( () => setTimeout( () => bdf.holder.grave.removeCard(bdf), 1001) );
			await board.addCardToRow(bdf, "close", card.holder);
		},
		weight: () => 50
	},
	avenger_kambi: {
		name: "Avenger",
		description: "When this card is removed from the battlefield, it summons a powerful new Unit Card to take its place. ",
		removed: async card => {
			let bdf = new Card(card_dict[196], card.holder);
			bdf.removed.push( () => setTimeout( () => bdf.holder.grave.removeCard(bdf), 1001) );
			await board.addCardToRow(bdf, "close", card.holder);
		},
		weight: () => 50
	},
	foltest_king: {
		description: "Pick an Impenetrable Fog card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Impenetrable Fog");
			if (out)
				await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "fog")
	},
	foltest_lord: {
		description: "Clear any weather effects (resulting from Biting Frost, Torrential Rain or Impenetrable Fog cards) in play.",
		activated: async () => await weather.clearWeather(),
		weight: (card, ai) =>  ai.weightCard( {row:"weather", name:"Clear Weather"} )
	},
	foltest_siegemaster: {
		description: "Doubles the strength of all your Siege units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "siege", card.holder).leaderHorn(),
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
			if (out)
				await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "rain")
	},
	emhyr_emperor: {
		description: "Look at 3 random cards from your opponent's hand.",
		activated: async card => {
			if (card.holder.controller instanceof ControllerAI)
				return;
			let container = new CardContainer();
			container.cards = card.holder.opponent().hand.findCardsRandom(() => true, 3);
			Carousel.curr.cancel();
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
			if (grave.findCards(c => c.isUnit()).length === 0)
				return;
			if (card.holder.controller instanceof ControllerAI) {
				let newCard = card.holder.controller.medic(card, grave);
				newCard.holder = card.holder;
				await board.toHand(newCard, grave);
				return;
			}
			Carousel.curr.cancel();
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
		activated: async card => await board.getRow(card, "close", card.holder).leaderHorn(),
		weight: (card, ai) => ai.weightHornRow(card, board.getRow(card, "close", card.holder))
	},
	eredin_bringer_of_death: {
		name: "Eredin : Bringer of Death",
		description: "Restore a card from your discard pile to your hand.",
		activated: async card => {
			let newCard;
			if (card.holder.controller instanceof ControllerAI) {
				newCard = card.holder.controller.medic(card, card.holder.grave)
			} else {
				Carousel.curr.exit();
				await ui.queueCarousel(card.holder.grave, 1, (c,i) => newCard = c.cards[i], c => c.isUnit(), false, false);
			}
			if (newCard)
				await board.toHand(newCard, card.holder.grave);
		},
		weight: (card, ai, max, data) => ai.weightMedic(data, 0, card.holder)
	},
	eredin_destroyer: {
		description: "Discard 2 card and draw 1 card of your choice from your deck.",
		activated: async (card) => {
			let hand = board.getRow(card, "hand", card.holder);
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				let cards = card.holder.controller.discardOrder(card).splice(0,2).filter(c => c.basePower < 7);
				await Promise.all(cards.map(async c => await board.toGrave(c, card.holder.hand)));
				card.holder.deck.draw(card.holder.hand);
				return;
			} else
				Carousel.curr.exit();
			await ui.queueCarousel(hand, 2, (c,i) => board.toGrave(c.cards[i], c), () => true);
			await ui.queueCarousel(deck, 1, (c,i) => board.toHand(c.cards[i], deck), () => true, true);
		},
		weight: (card, ai) => {
			let cards = ai.discardOrder(card).splice(0,2).filter(c => c.basePower < 7);
			if (cards.length < 2)
				return 0;
			return cards[0].abilities.includes("muster") ? 50 : 25;
		}
	},
	eredin_king: {
		description: "Pick any weather card from your deck and play it instantly.",
		activated: async card => {
			let deck = board.getRow(card, "deck", card.holder);
			if (card.holder.controller instanceof ControllerAI) {
				await ability_dict["eredin_king"].helper(card).card.autoplay(card.holder.deck);
			} else {
				Carousel.curr.cancel();
				await ui.queueCarousel(deck, 1, (c,i) => board.toWeather(c.cards[i], deck), c => c.faction === "weather", true);
			}
		},
		weight: (card, ai, max) => ability_dict["eredin_king"].helper(card).weight,
		helper: card => {
			let weather = card.holder.deck.cards.filter(c => c.row === "weather").reduce((a,c) =>a.map(c => c.name).includes(c.name) ? a : a.concat([c]), [] );
			
			let out, weight = -1;
			weather.forEach( c => {
				let w = card.holder.controller.weightWeatherFromDeck(c, c.abilities[0]);
				if (w > weight) {
					weight = w;
					out = c;
				}
			});
			return {card: out, weight: weight};
		}			
	},
	eredin_treacherous: {
		description: "Doubles the strength of all spy cards (affects both players).",
		gameStart: () => game.doubleSpyPower = true
	},
	francesca_queen: {
		description: "Destroy your enemy's strongest Close Combat unit(s) if the combined strength of all his or her Close Combat units is 10 or more.",
		activated: async card => await ability_dict["scorch_c"].placed(card),
		weight: (card, ai, max) => ai.weightScorchRow(card, max, "close")
	},
	francesca_beautiful: {
		description: "Doubles the strength of all your Ranged Combat units (unless a Commander's Horn is also present on that row).",
		activated: async card => await board.getRow(card, "ranged", card.holder).leaderHorn(),
		weight: (card, ai) => ai.weightHornRow(card, board.getRow(card, "ranged", card.holder))
	},
	francesca_daisy: {
		description: "Draw an extra card at the beginning of the battle.",
		placed: card => game.gameStart.push( () => {
			let draw = card.holder.deck.removeCard(0);
			card.holder.hand.addCard( draw );
			return true;
		})
	},
	francesca_pureblood: {
		description: "Pick a Biting Frost card from your deck and play it instantly.",
		activated: async card => {
			let out = card.holder.deck.findCard(c => c.name === "Biting Frost");
			if (out)
				await out.autoplay(card.holder.deck);
		},
		weight: (card, ai) => ai.weightWeatherFromDeck(card, "frost")
	},
	francesca_hope: {
		description: "Move agile units to whichever valid row maximizes their strength (don't move units already in optimal row).",
		activated: async card => {
			let close = board.getRow(card, "close");
			let ranged =  board.getRow(card, "ranged");
			let cards = ability_dict["francesca_hope"].helper(card);
			await Promise.all(cards.map(async p => await board.moveTo(p.card, p.row === close ? ranged : close, p.row) ) );
			
		},
		weight: card => {
			let cards = ability_dict["francesca_hope"].helper(card);
			return cards.reduce((a,c) => a + c.weight, 0);
		},
		helper: card => {
			let close = board.getRow(card, "close");
			let ranged =  board.getRow(card, "ranged");
			return validCards(close).concat( validCards(ranged) );
			function validCards(cont) {
				return cont.findCards(c => c.row === "agile").filter(c => dif(c,cont) > 0).map(c => ({card:c, row:cont, weight:dif(c,cont)}))
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
			if( game.roundCount < 2)
				return 0;
			let medics = card.holder.hand.findCard(c => c.abilities.includes("medic"));
			if (medics !== undefined)
				return 0;
			let spies = card.holder.hand.findCard(c => c.abilities.includes("spy"));
			if (spies !== undefined)
				return 0;
			if (card.holder.hand.findCard(c => c.abilities.includes("decoy")) !== undefined && (data.medic.length || data.spy.length && card.holder.deck.findCard(c => c.abilities.includes("medic")) !== undefined) )
				return 0;
			return 15;
		}
	},
	king_bran: {
		description: "Units only lose half their Strength in bad weather conditions.",
		placed: card => board.row.filter((c,i) => card.holder === player_me ^ i<3).forEach(r => r.halfWeather = true)
	}
};