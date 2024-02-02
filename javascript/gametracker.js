"use strict"

class GameTracker {
	constructor(player1,player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.rounds = [];
		this.winner = null;
	}

	startRound() {
		this.currentRound = new Round(this.rounds.length + 1);
		this.currentRound.setBeforeStats([player_me.total, player_op.total], board.row, [player_me.hand.cards.length, player_op.hand.cards.length]);
	}

	endRound(winpl) {
		this.currentRound.setAfterStats([player_me.total, player_op.total], board.row, [player_me.hand.cards.length, player_op.hand.cards.length]);
		this.currentRound.endRound(winpl);
		this.rounds.push(this.currentRound);
	}

	startTurn(pl) {
		this.currentRound.startTurn(pl);
	}

	endTurn() {
		this.currentRound.endTurn();
	}

	getCurrentTurn() {
		return this.currentRound.currentTurn;
	}

	endGame(winpl) {
		this.winner = winpl;
	}

	getScores() {
		let scores = [];
		this.rounds.forEach(r => {
			scores.push([r.finalScores[0], r.finalScores[1]]);
		});
		return scores;
	}

	getCardImpacts() {
		let data = {};
		this.rounds.forEach(r => {
			r.turns.forEach(t => {
				if (t.action instanceof UnitCardAction) {
					let ckey = t.action.card.key;
					if (!data[ckey]) data[ckey] = [];
					data[ckey].push(t.action.impact);
				}
			});
		});
		return data;
	}

	getAbilitiesImpact() {
		let cimp = this.getCardImpacts();
		let data = {
			"bond": [],
			"muster": [],
			"medic": [],
			"witcher": [],
			"whorshiped": [],
			"inspire": [],
			"scorch": [],
			"scorch_c": [],
			"morale": [],
			"horn": [],
			"witch_hunt": []
		};
		Object.keys(cimp).forEach(key => {
			let abi = card_dict[key]["ability"].split(" ");
			if (abi.includes("bond")) data["bond"] = data["bond"].concat(cimp[key].map(v => v / card_dict[key]["strength"]));
			else if (abi.includes("muster")) data["muster"] = data["muster"].concat(cimp[key].map(v => v / card_dict[key]["strength"]));
			else if (abi.includes("medic")) data["medic"] = data["medic"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.at(-1) && abi.at(-1).startsWith("witcher_")) data["witcher"] = data["witcher"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("whorshiped")) data["whorshiped"] = data["whorshiped"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("inspire")) data["inspire"] = data["inspire"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("scorch")) data["scorch"] = data["scorch"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("scorch_c")) data["scorch_c"] = data["scorch_c"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("morale")) data["morale"] = data["morale"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("horn")) data["horn"] = data["horn"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
			else if (abi.includes("witch_hunt")) data["witch_hunt"] = data["witch_hunt"].concat(cimp[key].map(v => v - card_dict[key]["strength"]));
		});
		return data;
	}
}

class Round {
	constructor(n) {
		this.number = n;
		this.turns = [];
		this.winner = null;
		this.finalScores = [0, 0];
		this.start_hand_size = [0, 0];
		this.end_hand_size = [0, 0];
	}

	startTurn(pl) {
		this.currentTurn = new Turn(this.turns.length + 1, this, pl);
		this.currentTurn.setBeforeStats([player_me.total, player_op.total], board.row, [player_me.hand.cards.length, player_op.hand.cards.length]);
	}

	endTurn() {
		this.currentTurn.setAfterStats([player_me.total, player_op.total], board.row, [player_me.hand.cards.length, player_op.hand.cards.length]);
		this.turns.push(this.currentTurn);
	}

	setBeforeStats(scores, rows, handsize) {
		this.startScores = scores;
		this.startRows = [];
		rows.forEach(r => {
			this.startRows.push(Object.assign({}, r));
		});
		this.start_hand_size = handsize;
	}

	setAfterStats(scores, rows, handsize) {
		this.endScores = scores;
		this.endRows = [];
		rows.forEach(r => {
			this.endRows.push(Object.assign({}, r));
		});
		this.end_hand_size = handsize;
		this.turns.forEach(t => {
			if (t.action instanceof UnitCardAction && t.action.card.currentLocation instanceof Row) {
				let pl = t.action.card.holder;
				if (!t.action.card.isLocked() &&
					(
						t.action.card.abilities.includes("bond") ||
						t.action.card.abilities.includes("whorshipped") ||
						t.action.card.abilities.includes("inspire") ||
						(t.action.card.abilities.at(-1) && t.action.card.abilities.at(-1).startsWith("witcher_"))
					)
				) {
					t.action.impact = t.action.card.power;
				} else if (!t.action.card.isLocked() &&
					(
						t.action.card.abilities.includes("scorch") ||
						t.action.card.abilities.includes("scorch_c") ||
						t.action.card.abilities.includes("medic") ||
						t.action.card.abilities.includes("witch_hunt")
					)
				) {
					t.action.impact = (t.endScores[getPlayerIndex(pl)] - t.startScores[getPlayerIndex(pl)]) + (t.startScores[getPlayerIndex(pl.opponent())] - t.endScores[getPlayerIndex(pl.opponent())]);
				} else if (!t.action.card.isLocked() && t.action.card.abilities.includes("morale")) {
					t.action.impact = t.action.card.power + t.action.card.currentLocation.cards.filter(c => c.isUnit()).length;
				} else if (!t.action.card.isLocked() && t.action.card.abilities.includes("horn")) {
					t.action.impact = t.action.card.power + t.action.card.currentLocation.cards.filter(c => c.isUnit()).reduce((a,c) => a + (c.power / 2),0);
				}
			}
		});
	}

	endRound(winpl) {
		this.winner = winpl;
		this.finalScores = [player_me.total, player_op.total];
	}
}

class Turn {
	constructor(n,rnd,pl) {
		this.number = n;
		this.round = rnd;
		this.player = pl;
		this.action = null;
		this.start_hand_size = [0, 0];
		this.end_hand_size = [0, 0];
	}

	setBeforeStats(scores, rows, handsize) {
		this.startScores = scores;
		this.startRows = [];
		rows.forEach(r => {
			this.startRows.push(Object.assign({}, r));
		});
		this.start_hand_size = handsize;
	}

	setAfterStats(scores, rows, handsize) {
		this.endScores = scores;
		this.endRows = [];
		rows.forEach(r => {
			this.endRows.push(Object.assign({}, r));
		});
		this.end_hand_size = handsize;
		if (this.action instanceof UnitCardAction) {
			var pl = this.action.card.holder;
			if (this.action.card.abilities.length === 0) this.action.impact = this.action.card.power;
			else if (this.action.card.abilities.includes("muster")) {
				let handdiff = Math.max(1, (this.start_hand_size[getPlayerIndex(pl)] - this.end_hand_size[getPlayerIndex(pl)]));
				this.action.impact = (this.endScores[getPlayerIndex(pl)] - this.startScores[getPlayerIndex(pl)]) / handdiff;
			}
		}
	}

	playUnitCard(card, row) {
		this.action = new UnitCardAction(this, card, row.getRowType());
	}

	playWeatherCard(card) {
		this.action = new WeatherCardAction(this, card.key, card.abilities.at(-1));
	}

	playSpecialCard(card, row) {
		this.action = new SpecialCardAction(this, card.key, row.getRowType());
	}

	playSpecialCardBoard(card) {
		this.action = new SpecialCardAction(this, card.key, "board");
	}

	passAction() {
		this.action = new PassAction(this);
	}

	useLeader(card) {
		this.action = new LeaderAction(this, card.key);
	}

	useLeaderOnRow(card,r) {
		this.action = new LeaderAction(this, card.key, r.getRowType());
	}

	useLeaderOnCard(card,t) {
		this.action = new LeaderAction(this, card.key, false, t.key);
	}

	summary() {
		let action_string = "No action";
		if (this.action) action_string = this.action.summary();
		return `[Round:${this.round.number}] [Turn:${this.number}] [ScoresBefore:${this.startScores[0]}/${this.startScores[1]}]\nPlayer ${this.player.tag}: ${action_string}]\n[ScoresAfter:${this.endScores[0]}/${this.endScores[1]}]`;
	}
}

class Action {
	constructor(turn) {
		this.turn = turn;
		this.targetRow = false;
		this.targetCard = false;
		this.impact = 0;
	}

	summary() {
		return "No output";
	}
}

class UnitCardAction extends Action {
	constructor(turn, card, r) {
		super(turn);
		this.card = card;
		this.key = card.key;
		this.targetRow = r;
	}

	summary() {
		return `Card '${this.key}' played in ${this.targetRow} row.`;
	}
}

class SpecialCardAction extends Action {
	constructor(turn, ckey, r) {
		super(turn);
		this.key = ckey;
		this.targetRow = r;
	}

	summary() {
		return `Special Card '${this.key}' played on ${this.targetRow}.`;
	}
}

class WeatherCardAction extends Action {
	constructor(turn, ckey, type) {
		super(turn);
		this.key = ckey;
		this.type = type;
	}

	summary() {
		return `Weather Card '${this.key}' played with ${this.type} effect.`;
	}
}

class LeaderAction extends Action {
	constructor(turn, ckey, targetRow=false, targetCard=false) {
		super(turn);
		this.key = ckey;
		this.targetRow = targetRow;
		this.targetCard = targetCard;
	}

	summary() {
		return `Leader '${this.key}' ability used`;
	}
}

class FactionAction extends Action {
	constructor(turn, ckey) {
		super(turn);
		this.key = ckey;
	}
}

class PassAction extends Action {
	constructor(turn) {
		super(turn);
	}

	summary() {
		return "Passed";
	}
}

function getPlayerIndex(pl) {
	return pl.tag === "me" ? 0 : 1;
}