const famousPeople = [

{
name: "Michael Jackson",
hints: ["king of pop","Thriller","Moonwalk"]
},
{
    name: "Michael Jordan",
    hints: ["Air jordan","Chicago Bulls","Basketball"]
    },
    {
        name: "Cristiano Ronaldo",
        hints: ["Portugal","Football","Real Madrid"]
        },
        {
            name: "Michael Schumacher",
            hints: ["Ferrari","Formula1","7-Time World Champion"]
            },
            {
                name: "Napoleon Bonaparte",
                hints: ["France","Waterloo","Emperor"]
                },



];

let currentPerson;
let score = 0 ;
let timer;
let timeLeft = 60;
let hintsUsed =0;

document.getElementById('start-button').addEventListener('click' , startGame);
document.getElementById('submit-guess').addEventListener('click' , submitGuess);
document.getElementById('extra-hint-button').addEventListener('click' , showExtraHint);

function startGame() {
document.getElementById('instruction-board').style.display = 'none';
document.getElementById('game-board').style.display = 'block';
score = 0;
timeLeft = 60;
hintsUsed = 0;
updateScore();
startTimer();
nextPerson();

}

function startTimer()  {
timer = setInterval(() => {
timeLeft--;
document.getElementById('timer').innerText = 'Time Left: ${timeLeft}';
if (timeLeft <= 0) {
  clearInterval(timer);
  endGame();  
}

},1000);

}

function updateScore(){
    document.getElementById('score').innerText = 'score: ${score}';
}

function nextPerson() {
    currentPerson = famousPeople[Math.floor(Math.random() * famousPeople.length)];
    document.getElementById('hint-1').innerText = 'hint 1: ${currentPerson.hints[0]}';
    document.getElementById('hint-2').innerText = 'hint 2: ${currentPerson.hints[1]}';
    document.getElementById('hint-3').innerText = 'hint 3: ${currentPerson.hints[2]}';
    document.getElementById('extra-hint').style.display  = 'none';
    document.getElementById('extra-hint-button').disabled = false;
    document.getElementById('guess-input').Value = '';
    document.getElementById('result').innerText = '';

}

function showExtraHint() {
document.getElementById('extra-hint').innerText = 'Extra Hint: ${currentPerson.name} ';
document.getElementById('extra-hint').style.display = 'block';
document.getElementById('extra-hint-button').disabled = true;


}

function submitGuess () {
const guess = document.getElementById('guess-input').Value.trim().toLoweCase();
if (guess === currentPerson.name.toLoweCase()) {
score++;
document.getElementById('result').innerHTML = 'Correct';
updateScore();
nextPerson();
} else {
document.getElementById('result').innerText = 'Incorrect, try again';


}


}


function endGame() {
alert('Game over! your final score is ${score}');
document.getElementById('game-board').style.display = 'none';
document.getElementById('instruction-board').style.display = 'block';

}
