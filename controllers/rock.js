const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
	const rps = req.app.locals.rps;
	rps.updateMoves(req.body.rock);
	rps.updateCompMove();
	res.render("pages/rock", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostRock()});
});

module.exports = router;