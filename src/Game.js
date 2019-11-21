const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

class Game {
  constructor(currentRound) {
    this.currentRound = currentRound;
  }

  printQuestion(round) {
    util.main(round);
  }

  start() {
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.printMessage(deck, round);
    this.printQuestion(round);
  }

  printMessage(deck, round) {
      console.log(`
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
*---------------------------------------------------------------------------*
*        Welcome to FlashCards! You are playing with ${deck.countCards()} cards.              *
*---------------------------------------------------------------------------*
*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`)
  }

}

module.exports = Game;
