const express = require('express')
const router = express.Router()

router.post("/", (req, res) => {
    const rps = req.app.locals.rps
	rps.updateMoves(req.body.paper);
	rps.updateCompMove();
	res.render("pages/paper", {player: rps.player, move: rps.moves, compmove: rps.compMove, status: rps.hasLostPaper()});
});

module.exports = router