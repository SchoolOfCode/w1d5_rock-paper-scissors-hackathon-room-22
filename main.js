//task 1
//let playerMove = "rock";
//let computerMove = "paper";
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

/*
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
    } else if (player1 === "scissors"){
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
*/

//task3
/*
let move = prompt ('What is your move?');
alert(getWinner(move, computerMove));
*/


//task 4

function getRandomMove(){
    let moveNumber = Math.floor(Math.random() * 3);
    if (moveNumber === 0){
        return "rock"
    }else if (moveNumber === 1){
        return "paper"
    } else if (moveNumber === 2){
        return "scissors"
    }

} 
/*
let move = prompt ('What is your move?');
let computerPlay = getRandomMove()
let result = getWinner(move, computerPlay)
alert(result)
*/

//task 5
/*
let move;
let computerPlay;
let result;
let keepPlaying = true;
while (keepPlaying) {
    move = prompt ('What is your move?');
    computerPlay = getRandomMove()
    result = getWinner(move, computerPlay)
    alert(result)
    keepPlaying = confirm("Do you want to keep playing?");
}
*/

//task 6
let gamesPlayed = 0; //number 
let winScore = 0; //number
let lossScore = 0; //number
let drawScore = 0; //number

let move;
let computerPlay;
let result;
let keepPlaying = true;
while (keepPlaying) {
    move = prompt ('What is your move?');
    computerPlay = getRandomMove()
    result = getWinner(move, computerPlay)
    alert(`Result: ${result}, Number of Games Played: ${gamesPlayed}, Wins: ${winScore}, Losses: ${lossScore}`);
    keepPlaying = confirm("Do you want to keep playing?");
}


function getWinner(player1, player2) {
    let score;
    if (player1 === "rock"){
        if (player2 === "paper"){
            lossScore++;
            score = -1;
    
        }else if (player2 === "scissors"){
            winScore++;
            score = 1;
    
        } else {
            drawScore++;
            score = 0;
        }
    } else if (player1 === "paper"){
        if (player2 === "paper"){
            drawScore++;
            score = 0;
    
        }else if (player2 === "scissors"){
            lossScore++;
            score = -1;
    
        } else {
            winScore++;
            score = 1;
        }
    } else if (player1 === "scissors"){
        if (player2 === "paper"){
            winScore++;
            score = 1;
    
        }else if (player2 === "scissors"){
            drawScore++;
            score = 0;
    
        } else {
            lossScore++;
            score = -1;
        }
    
    }
    gamesPlayed++;
    return score;
}