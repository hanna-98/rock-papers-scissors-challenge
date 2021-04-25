const express = require('express');
const app = express();
const port = 3001;

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const RPS = require("./src/rps.js")
const rps = new RPS()

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index'); 
});

app.post('/game', (req, res) => {
    rps.updateName(req.body.player)
    res.render('pages/game', {name: req.body.player})
})

app.post('/rock', (req, res) => {
    rps.updateMoves(req.body.rock)
    rps.updateCompMove()
    res.render('pages/rock', {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostRock()})
})

app.post('/paper', (req, res) => {
    rps.updateMoves(req.body.paper)
    rps.updateCompMove()
    res.render('pages/paper', {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostPaper()})
})

app.post('/scissors', (req, res) => {
    rps.updateMoves(req.body.scissors)
    rps.updateCompMove()
    res.render('pages/scissors', {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostScissors()})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});