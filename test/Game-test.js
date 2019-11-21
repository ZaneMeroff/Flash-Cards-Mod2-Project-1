const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Game', function() {

  it('should be a function', function() {
    const round = new Game();
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    const game = new Game()
    expect(game).to.be.an.instanceof(Game);
  });

});
