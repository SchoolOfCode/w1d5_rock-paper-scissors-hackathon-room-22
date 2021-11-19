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
/*let gamesPlayed = 0; //number 
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
*/

//task 7

let firstLetter // First letter of username
let userName 
do {
    userName = prompt ("What is your name? It must start with a capital letter and be 10 characters or less.")
    firstLetter = userName.charCodeAt(0); // Shows the code for the first letter in the string username using the ASCII code.
  } while (userName.length > 10 || !(firstLetter >= 65 && firstLetter < 91)); // Checks that length of username is less than 10 and uses ASCII codes to check if it's a capital letter.

  

let gamesPlayed = 0; // Number of games played
let winScore = 0; // Number of times the player won
let lossScore = 0; // Number of times the player lost
let drawScore = 0; // Number of draws

let move; // Player's move
let computerPlay; // Computer's move
let result; // Result after the game
let keepPlaying // Boolean, true if player wants to keep playing 
do {
    move = prompt ('What is your move?'); // Asks the player what their move is
    computerPlay = getRandomMove() // Computer's random move
    result = getWinner(move, computerPlay) // The result of the computer and player's game
    alert(`Username: ${userName}, Result: ${result}, Number of Games Played: ${gamesPlayed}, Wins: ${winScore}, Losses: ${lossScore}`); // Lets you know the wins, draws losses, result and username
    keepPlaying = confirm("Do you want to keep playing?"); // Asks player to confirm if they want to keep playing
}while (keepPlaying) // Loop quits when player cancels game


function getWinner(player1, player2) {
    let score; // Keeps track of score 
    //Test to see who wins with each combination of rock, paper, scissors
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
    gamesPlayed++; //  +1 is added after every game to keep track of the amount of games played.
    return score; // Shows the score at the end of the game.
}
