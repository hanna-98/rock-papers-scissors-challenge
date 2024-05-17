const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const rps = req.app.locals.rps;
	rps.updateMoves(req.body.scissors);
	rps.updateCompMove();
	res.render("pages/scissors", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostScissors()});
});

module.exports = router;