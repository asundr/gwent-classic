"use strict"

var factions = {
	realms: {
		name: "Northern Realms",
		factionAbility: player => game.roundStart.push(async () => {
			if (game.roundCount > 1 && game.roundHistory[game.roundCount - 2].winner === player) {
				player.deck.draw(player.hand);
				await ui.notification("north", 1200);
			}
			return false;
		}),
		activeAbility: false,
		abilityUses: 0,
		description: "Draw a card from your deck whenever you win a round."
	},
	nilfgaard: {
		name: "Nilfgaardian Empire",
		description: "Wins any round that ends in a draw.",
		activeAbility: false,
		abilityUses: 0
	},
	monsters: {
		name: "Monsters",
		factionAbility: player => game.roundEnd.push( () => {
			let units = board.row.filter( (r,i) => player === player_me ^ i < 3)
				.reduce((a,r) => r.cards.filter(c => c.isUnit()).concat(a), []);
			if (units.length === 0)
				return;
			let card = units[randomInt(units.length)];
			card.noRemove = true;
			game.roundStart.push(async () => {
				await ui.notification("monsters", 1200);
				delete card.noRemove;
				return true; 
			});
			return false;
		}),
		description: "Keeps a random Unit Card out after each round.",
		activeAbility: false,
		abilityUses: 0
	},
	scoiatael: {
		name: "Scoia'tael",
		factionAbility: player => game.gameStart.push(async () => {
			let notif = "";
			if (player === player_me && !(player.controller instanceof ControllerAI)) {
				await ui.popup("Go First [E]", () => game.firstPlayer = player, "Let Opponent Start [Q]", () => game.firstPlayer = player.opponent(), "Would you like to go first?", "The Scoia'tael faction perk allows you to decide who will get to go first.");
				notif = game.firstPlayer.tag + "-first";
			} else if (player.controller instanceof ControllerAI) {
				if (Math.random() < 0.5) {
					game.firstPlayer = player;
					notif = "scoiatael";
				} else {
					game.firstPlayer = player.opponent();
					notif = game.firstPlayer.tag + "-first";
				}
			}
			await ui.notification(notif, 1200);
			return true;
		}),
		description: "Decides who takes first turn.",
		activeAbility: false,
		abilityUses: 0
	},
	skellige: {
		name: "Skellige",
		factionAbility: player => game.roundStart.push( async () => {
			if (game.roundCount != 3) return false;
			await ui.notification("skellige-" + player.tag, 1200);
			await Promise.all(player.grave.findCardsRandom(c => c.isUnit(), 2).map(c => board.toRow(c, player.grave)));
			return true;
		}),
		description: "2 random cards from the graveyard are placed on the battlefield at the start of the third round.",
		activeAbility: false,
		abilityUses: 0
	},
	witcher_universe: {
		name: "Witcher Universe",
		factionAbility: async player => {
			await ui.notification("witcher_universe", 1200);
		},
		factionAbilityInit: player => game.roundStart.push(async () => {
			player.updateFactionAbilityUses(1);
			return false;
		}),
		description: "Can skip a turn once every round.",
		activeAbility: true,
		abilityUses: 1,
		weight: (player) => {
			return 20;
		}
	},
	toussaint: {
		name: "Toussaint",
		factionAbility: player => game.roundStart.push(async () => {
			if (game.roundCount > 1 && !(game.roundHistory[game.roundCount - 2].winner === player)) {
				player.deck.draw(player.hand);
				await ui.notification("toussaint", 1200);
			}
			return false;
		}),
		activeAbility: false,
		abilityUses: 0,
		description: "Draw a card from your deck whenever you lose a round."
	},
	lyria_rivia: {
		name: "Lyria & Rivia",
		factionAbility: player => {
			let card = new Card("spe_lyria_rivia_morale", card_dict["spe_lyria_rivia_morale"], player);
			card.removed.push(() => setTimeout(() => card.holder.grave.removeCard(card), 2000));
			card.placed.push(async () => await ui.notification("lyria_rivia", 1200));
			player.endTurnAfterAbilityUse = false;
			ui.showPreviewVisuals(card);
			ui.enablePlayer(true);
			if (!(player.controller instanceof ControllerAI)) ui.setSelectable(card, true);
		},
		activeAbility: true,
		abilityUses: 1,
		description: "Apply a Morale Boost effect in the selected row (boost all units by 1 in this turn).",
		weight: (player) => {
			let units = player.getAllRowCards().concat(player.hand.cards).filter(c => c.isUnit()).filter(c => !c.abilities.includes("spy"));
			let rowStats = {
				"close": 0,
				"ranged": 0,
				"siege": 0,
				"agile": 0
			};
			units.forEach(c => {
				rowStats[c.row] += 1;
			});
			rowStats["close"] += rowStats["agile"];
			return Math.max(rowStats["close"], rowStats["ranged"], rowStats["siege"]);
		}
	},
	syndicate: {
		name: "Syndicate",
		factionAbility: player => game.gameStart.push(async () => {
			let card = new Card("sy_sigi_reuven", card_dict["sy_sigi_reuven"], player);
			await board.addCardToRow(card, card.row, card.holder);
		}),
		activeAbility: false,
		abilityUses: 0,
		description: "Starts the game with the Hero card Sigi Reuven on the board."
	},
	zerrikania: {
		name: "Zerrikania",
		factionAbility: player => game.roundStart.push(async () => {
			if (game.roundCount > 1 && !(game.roundHistory[game.roundCount - 2].winner === player)) {
				if (player.grave.findCards(c => c.isUnit()) <= 0) return;
				let grave = player.grave;
				let respawns = [];
				if (player.controller instanceof ControllerAI) {
					respawns.push({
						card: player.controller.medic(player.leader, grave)
					});
				} else {
					await ui.queueCarousel(player.grave, 1, (c, i) => respawns.push({
						card: c.cards[i]
					}), c => c.isUnit(), true);
				}
				await Promise.all(respawns.map(async wrapper => {
					let res = wrapper.card;
					grave.removeCard(res);
					grave.addCard(res);
					await res.animate("medic");
					await res.autoplay(grave);
				}));
				await ui.notification("zerrikania", 1200);
			}
			return false;
		}),
		activeAbility: false,
		abilityUses: 0,
		description: "Restore a unit card of your choice whenever you lose a round."
	}
}