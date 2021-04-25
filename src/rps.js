class RPS {
    constructor(compMove = "", moves = "", player = ""){
        this.compMove = compMove
        this.moves = moves
        this.player = player
        this.rpsArr = ["Rock", "Paper", "Scissors"];
    }

    updateName(name){
        this.player = name
        return this.player
    }

    updateMoves(move){
        this.moves = move
        return this.moves
    }

    updateCompMove(){
        this.compMove = this.rpsArr[Math.floor(Math.random()*3)]
        return this.compMove
    }

    hasLostRock(){
        if (this.moves === this.compMove){
            return "You drew with Computer"
        } else if (this.compMove === "Paper"){
            return "You lost :("
        } else {
            return "You won!"
        }
    }

    hasLostPaper(){
        if (this.moves === this.compMove){
            return "You drew with Computer"
        } else if (this.compMove === "Rock"){
            return "You won!"
        } else {
            return "You lost :("
        }
    }

    hasLostScissors(){
        if (this.moves === this.compMove){
            return "You drew with Computer"
        } else if (this.compMove === "Paper"){
            return "You won!"
        } else {
            return "You lost :("
        }
    }
}

module.exports = RPS;