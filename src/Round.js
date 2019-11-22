const Turn = require('../src/Turn');

class Round {
  constructor(deck, currentCard) {
    this.deck = deck ? deck.cards : [];
    this.currentCard = this.deck[0];
    this.turn = 0;
    this.incorrectGuesses = [];
    this.startTime = Date.now();
  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    this.turn++;
    const turn = new Turn(guess, this.currentCard);
    this.currentCard = this.deck[this.turn];
    if (turn.evaluateGuess() === true) {
      return turn.giveFeedback();
    } else {
      this.incorrectGuesses.push(this.currentCard.id);
      return turn.giveFeedback();
    }
  }

  calculatePercentageCorrect() {
    var score =
    (((this.turn - this.incorrectGuesses.length) / this.turn) * 100);
    return Math.floor(score);
  }

  endRound() {
    console.log(`


      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      -----------------------------------------------------------------------------

                                  R O U N D   O V E R !

                     You answered ${this.calculatePercentageCorrect()}% of the questions correctly!

                  ${this.calculateTime()}

      -----------------------------------------------------------------------------
      *-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*`);
    return `** Round over! ** You answered ${this.calculatePercentageCorrect()}% of the questions correctly!`;
  }

  calculateTime() {
    let endTime = Date.now();
    let totalTime = (endTime - this.startTime) / 1000;
    let min = Math.floor(totalTime / 60);
    let sec = Math.round(totalTime % 60);
    return `You finished in ${min} min(s) and ${sec} sec(s)!  Great Job!`;
  }

}

module.exports = Round;
