// const { compile } = require("ejs");

describe("feature tests", function(){
	beforeEach(function(){
		cy.visit("/");
	});

	it("has an input field to type name", function(){
		cy.contains("Welcome to Rock Paper Scissors!");
		cy.contains("Type your name below to get started");
		cy.get("#player-name").should("have.attr", "placeholder", "Type your name here");
		cy.get("#submit-button").should("be.visible");
	});

	it("/game page displays player name and rps buttons", function(){
		cy.get("#player-name").type("Hanna");
		cy.get("#submit-button").click();
		cy.url().should("include", "/game");
		cy.contains("Hanna is playing!");
		cy.contains("Choose your move");
		cy.get("#rock-button").should("be.visible");
		cy.get("#paper-button").should("be.visible");
		cy.get("#scissors-button").should("be.visible");
	});

	it("/rock page", function(){
		cy.get("#player-name").type("Hanna");
		cy.get("#submit-button").click();
		cy.get("#rock-button").click();
		cy.url().should("include", "/rock");
		cy.contains("Hanna chose Rock");
		cy.get("#new-game-link").click();
		cy.contains("Welcome to Rock Paper Scissors!");
	});

	it("/paper page", function(){
		cy.get("#player-name").type("Hanna");
		cy.get("#submit-button").click();
		cy.get("#paper-button").click();
		cy.url().should("include", "/paper");
		cy.contains("Hanna chose Paper");
		cy.get("#new-game-link").click();
		cy.contains("Welcome to Rock Paper Scissors!");
	});

	it("/scissors page", function(){
		cy.get("#player-name").type("Hanna");
		cy.get("#submit-button").click();
		cy.get("#scissors-button").click();
		cy.url().should("include", "/scissors");
		cy.contains("Hanna chose Scissors");
		cy.get("#new-game-link").click();
		cy.contains("Welcome to Rock Paper Scissors!");
	});
});