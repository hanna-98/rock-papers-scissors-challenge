const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("styles"));

const indexController = require("./controllers/index.js");
const gameController = require("./controllers/game.js");
const rockController = require("./controllers/rock.js");
const paperController = require("./controllers/paper.js");
const scissorsController = require("./controllers/scissors.js");

app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", indexController);

app.use("/game", gameController);

app.use("/rock", rockController);

app.use("/paper", paperController);

app.use("/scissors", scissorsController);

app.listen(port, () => {
  console.log(`RPS app listening at http://localhost:${port}`);
});
