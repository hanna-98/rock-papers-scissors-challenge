const RPS = require("../../src/rps.js");
let rps; 

describe("unit tests", function(){

	beforeEach(function(){
		rps = new RPS();
	});

	it("updateName function updates player name", function(){
		rps.updateName("Hanna");
		expect(rps.player).toEqual("Hanna");
	});

	it("updateMoves function updates player move", function(){
		rps.updateMoves("Rock");
		expect(rps.moves).toEqual("Rock");
	});

	it("updateCompMove function updates computer move", function(){
		rps.updateCompMove();
		expect(rps.compMove === "Rock" || rps.compMove === "Paper" || rps.compMove === "Scissors").toBeTrue();
	});

	it("hasLostRock functionality when computer chooses rock", function(){
		rps = new RPS(compMove = "Rock");
		rps.updateMoves("Rock");
		expect(rps.hasLostRock()).toEqual("You drew with Computer");
	});

	it("hasLostRock functionality when computer chooses paper", function(){
		rps = new RPS(compMove = "Paper");
		rps.updateMoves("Rock");
		expect(rps.hasLostRock()).toEqual("You lost :(");
	});

	it("hasLostRock functionality when computer chooses scissors", function(){
		rps = new RPS(compMove = "Scissors");
		rps.updateMoves("Rock");
		expect(rps.hasLostRock()).toEqual("You won!");
	});
    
	it("hasLostPaper functionality when computer chooses paper", function(){
		rps = new RPS(compMove = "Paper");
		rps.updateMoves("Paper");
		expect(rps.hasLostPaper()).toEqual("You drew with Computer");
	});

	it("hasLostPaper functionality when computer chooses rock", function(){
		rps = new RPS(compMove = "Rock");
		rps.updateMoves("Paper");
		expect(rps.hasLostPaper()).toEqual("You won!");
	});

	it("hasLostPaper functionality when computer chooses scissors", function(){
		rps = new RPS(compMove = "Scissors");
		rps.updateMoves("Paper");
		expect(rps.hasLostPaper()).toEqual("You lost :(");
	});

	it("hasLostScissors functionality when computer chooses scissors", function(){
		rps = new RPS(compMove = "Scissors");
		rps.updateMoves("Scissors");
		expect(rps.hasLostScissors()).toEqual("You drew with Computer");
	});

	it("hasLostScissors functionality when computer chooses rock", function(){
		rps = new RPS(compMove = "Rock");
		rps.updateMoves("Scissors");
		expect(rps.hasLostScissors()).toEqual("You lost :(");
	});

	it("hasLostScissors functionality when computer chooses paper", function(){
		rps = new RPS(compMove = "Paper");
		rps.updateMoves("Scissors");
		expect(rps.hasLostScissors()).toEqual("You won!");
	});
});