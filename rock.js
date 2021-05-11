let computerScore = 0;
let PlayerScore = 0;
let roundNum = 1;

//User and Computer scores

const userScore = document.querySelector('.user-score');
const randomScore = document.querySelector('.computer-score');

//user buttons
const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorButton = document.querySelector ('.scissors');


//computer buttons
const computerRock = document.querySelector('.computer-rock');
const computerPaper = document.querySelector('.computer-paper');
const computerScissors = document.querySelector('.computer-scissors');




// Naming and Placing the "Results" of each round
const userContainer = document.querySelector('.user-container');
const gameWrapper = document.querySelector('.game-wrapper');


//Array for turn log
let resultsArray = [];
let resultsLog = document.createElement('ul');
resultsLog = classList.add('round-result');
gameWrapper.insertAdjacentElement('beforeend', resultsLog);


//Creating a button to refresh page
const newGame = document.createElement('div');
newGame.textContent = 'Play again';
newGame.classList.add('button','refresh')



//function to refresh page
function refreshPage(){
    window.location.reload(true);

}

// A new result will appear at the top of the log for each turn
function gameLog(){
    var li = document.createElement('li')
    li.textContent = resultsArray[`${resultsArray.length -1}`];
    resultsLog.insertAdjacentElement('afterbegin', li);
}

//creating random outcome
function computerplay(){
    const number = math.floor(math.random() * 1000);
    if (number % 3 === 0){
        return 'rock';

    }
    if (number % 3 === 1){
        return 'paper';
    }
    return 'scissors';
}