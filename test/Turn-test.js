const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let turn;

  beforeEach(function() {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('pug', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should accept a guess', function() {
    expect(turn.returnGuess()).to.equal('pug');
  });

  it('should return card object', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should evaluate a guess', function() {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('should give feedback', function() {
    expect(turn.giveFeedback()).to.equal('WRONG!');
  });

});
