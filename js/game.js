'use strict'

function numberGame() {
var guesses = 4;
for (var x = 0; x < 4; x++){
  var myNumber = parseInt(prompt('guess how much gas tank my honda accord holds').toLowerCase().trim());
  console.log('my number' + myNumber);
  if (myNumber < 15){
    guesses--;
    alert('Too low, try again.  You have ' + guesses + ' left.' );
  } if (myNumber > 15){
    guesses--;
    alert ('Too high, try again ' + guesses + ' left.');
   } if (myNumber === 15){
      alert ('You got it');
      x = 4;
  }
}
}
function guessingGame() {
var scoreCorrect = 0;
var cityState = ['puyallup', 'tacoma', 'federal way'];
var totalGuess = 6;

var answerCorrect = false;
while(totalGuess > 0 && answerCorrect === false) {
  var userInput = prompt('Guess what City and States I lived in').toLowerCase().trim();
  for (var i = 0; i < cityState.length; i++){
    if (userInput === cityState[i]) {
      alert('good job.  I have lived in ' + cityState);
      scoreCorrect +=1;
      answerCorrect = true;
      break;
      } 
  } if (i >= cityState.length){
    alert('oops, You\'re wrong.  You have ' + totalGuess + ' guesses left.');
    console.log(totalGuess);
    totalGuess --;
  } if (totalGuess <1) {
    alert('oops, you didn\'t get it.  The correct answers were ' + cityState);
  }
}
}

numberGame();
guessingGame();

