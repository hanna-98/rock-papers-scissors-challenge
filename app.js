const express = require("express");
const app = express();
const port = 3001;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('styles'));

const indexController = require("./controllers/index.js")
const gameController = require("./controllers/game.js")
const rockController = require("./controllers/rock.js")
const paperController = require("./controllers/paper.js")
const scissorsController = require("./controllers/scissors.js")

// const RPS = require("./src/rps.js");
// const rps = new RPS();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexController)

app.use("/game", gameController)

app.use("/rock", rockController)

app.use("/paper", paperController)

app.use("/scissors", scissorsController)




// app.get("/", (req, res) => {
// 	res.render("pages/index"); 
// });

// app.post("/game", (req, res) => {
// 	rps.updateName(req.body.player);
// 	res.render("pages/game", {name: req.body.player});
// });

// app.post("/rock", (req, res) => {
// 	rps.updateMoves(req.body.rock);
// 	rps.updateCompMove();
// 	res.render("pages/rock", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostRock()});
// });

// app.post("/paper", (req, res) => {
// 	rps.updateMoves(req.body.paper);
// 	rps.updateCompMove();
// 	res.render("pages/paper", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostPaper()});
// });

// app.post("/scissors", (req, res) => {
// 	rps.updateMoves(req.body.scissors);
// 	rps.updateCompMove();
// 	res.render("pages/scissors", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostScissors()});
// });

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});