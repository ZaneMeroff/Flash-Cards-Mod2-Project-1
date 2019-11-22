const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should be able to take a deck', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should return current card', function() {
    expect(round.currentCard).to.deep.equal(card1);
  });

  it('should start at turn 0', function() {
    expect(round.turn).to.equal(0);
  });

  it('should store a list of incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('takeTurn should update turns count', function() {
    const turn = new Turn('pug', card1);
    round.takeTurn(turn);
    expect(round.turn).to.equal(1);
  });

  it('takeTurn should evaluate guesses & give feedback', function() {
    const turn = new Turn('pug', card1);
    expect(turn.evaluateGuess()).to.equal(false);
    expect(turn.giveFeedback()).to.equal('WRONG!');
  });

  it('takeTurn should store ids of incorrect guesses', function() {
    round.takeTurn('pug');
    expect(round.incorrectGuesses.length).to.deep.equal(1);
  });

  it('should calculate the percent of correct guesses', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.calculatePercentageCorrect()).to.equal(100);
  });

  it('should print round over and display score', function() {
    round.takeTurn('sea otter');
    round.takeTurn('gallbladder');
    round.takeTurn('Fitzgerald');
    expect(round.endRound()).to.equal('** Round over! ** You answered 100% of the questions correctly!');
  });

});
