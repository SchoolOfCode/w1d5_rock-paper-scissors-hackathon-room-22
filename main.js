//task 1
let playerMove = "rock";
let computerMove = "paper";
/*
if (playerMove === "rock"){
    if (computerMove === "paper"){
        console.log("COMPUTER WINS!!!")

    }else if (computerMove === "scissors"){
        console.log("PLAYER 1 WINS!!!")

    } else {
        console.log("DRAW!!!")
    }
} else if (playerMove === "paper"){
    if (computerMove === "paper"){
        console.log("DRAW!!!")

    }else if (computerMove === "scissors"){
        console.log("COMPUTER WINS!!!")

    } else {
        console.log("PLAYER 1 WINS!!!")
    }
} else {
    if (computerMove === "paper"){
        console.log("PLAYER 1 WINS!!!")

    }else if (computerMove === "scissors"){
        console.log("DRAW!!!")

    } else {
        console.log("COMPUTER WINS!!!")
    }

}
*/

//task 2

function getWinner(player1, player2) {
    if (player1 === "rock"){
        if (player2 === "paper"){
            return -1
    
        }else if (player2 === "scissors"){
            return 1
    
        } else {
           return 0
        }
    } else if (player1 === "paper"){
        if (player2 === "paper"){
            return 0
    
        }else if (player2 === "scissors"){
            return -1
    
        } else {
            return 1
        }
    } else {
        if (player2 === "paper"){
            return 1
    
        }else if (player2 === "scissors"){
           return 0
    
        } else {
            return -1
        }
    
    }
}
console.log(getWinner(playerMove, computerMove));