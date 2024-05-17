const express = require("express");
const router = express.Router();
const RPS = require("../src/rps.js");

router.post("/", (req, res) => {
	req.app.locals.rps = new RPS();
	const rps = req.app.locals.rps;
	rps.updateName(req.body.player);
	res.render("pages/game", {name: req.body.player});
});

router.get("/", (req, res) => {
	const rps = req.app.locals.rps;
	res.render("pages/game", {name: rps.player});
});

module.exports = router;