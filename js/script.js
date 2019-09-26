'use strict'
// getting all the varibles to be used later 
var userScore = 0;
var computerScore = 0;
var gameStart = false;
var roundToPlay = 0;
var roundPlayed = 0;

var userScore_span = document.getElementById("user-score");
var computerScore_span = document.getElementById("computer-score");
var scoreBoard_div = document.querySelector(".score-board");
var result_p = document.querySelector(".result > p");

var rock_div = document.getElementById('rock');
var paper_div = document.getElementById('paper');
var scissors_div = document.getElementById('scissors');

var outputRock_div = document.getElementById('output-rock');
var outputPaper_div = document.getElementById('output-paper');
var outputScissors_div = document.getElementById('output-scissors');

var action = document.getElementById ("action-message");
//--------------------------------------------------------------

//- ruch computera mozliwosc losowe 0,1,2,
function computerMove(computerChoice) {  
  var computerChoice = ['rock', 'paper', 'scissors']; //array
  var options = Math.floor(Math.random()*3);        
  return computerChoice [options];   //[] because computerChoice is an array
};

function win(playerChoice, computerChoice){
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "I played " + playerChoice + " It beats " + computerChoice + " .... SO I WON !!";
};

function lose(playerChoice, computerChoice){
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore; 
  result_p.innerHTML = "I played " + playerChoice + " the computer played " + computerChoice + " .... SO I LOST !!";
};

function draw (playerChoice, computerChoice){
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = "I played " + playerChoice + " the computer played " + computerChoice + " .... IT IS A DRAW !!"; 
};

// Ruch gracza-----------------------
function playerMove(playerChoice){  
   if (gameStart = true){
   var computerChoice = computerMove();

      if (roundToPlay > roundPlayed){
      roundPlayed++; 
    switch (playerChoice + computerChoice){
    case "ROCKscissors":
    case "PAPERrock":
    case "SCISSORSpaper":
    win(playerChoice, computerChoice); 
    break;
      
    case "ROCKpaper":
    case "PAPERscissors":
    case "SCISSORSrock":
    lose(playerChoice, computerChoice); 
    break;
      
    case "ROCKrock":
    case "PAPERpaper":
    case "SCISSORSscissors":
    draw(playerChoice, computerChoice);  
    }; //closing switch
    
    } else {   
    alert("The game is over");  
    };
 
} else {  
  gameStart = false;
  alert("Click on Make Your Move");
}; //closing if gameStart    

}; //closing PlayerMove funtion

  
// Guzik Rock---------------------------------
  rock_div.addEventListener("click", function() {
  playerMove("ROCK");
  })

// Guzik Paper---------------------------------
   paper_div.addEventListener("click", function() {
  playerMove("PAPER");
  })

// Guzik Scissors --------------------------------------
  scissors_div.addEventListener("click", function() {
   playerMove("SCISSORS");
  })





// Button make your Move - How many games will you play?

window.addEventListener("load", function() { 
  var button = document.getElementById('greeter-button-action-message'),
      output = document.getElementById('greeter-output-scissors');
     
 button.addEventListener('click', function() {
   roundToPlay = window.prompt('How many games will you play??');
   
   roundToPlay = parseInt(roundToPlay);
   if(isNaN(roundToPlay) == false){
     gameStart = true;
    }
  });
});


