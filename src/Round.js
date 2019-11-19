class Round {
  constructor(deck, currentCard) {
    this.deck = deck ? deck.cards : [] ;
    this.currentCard = currentCard ? curentCard.deck : [];
  }

  returnCurrentCard() {
    console.log(this.deck);
    return this.deck[0];
  }

}

module.exports = Round;
