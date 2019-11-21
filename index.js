const http = require('http');
let app = http.createServer();
const Game = require('../flash_cards/src/Game');

app.listen(3000, '127.0.0.1');

var game = new Game();

game.start();
