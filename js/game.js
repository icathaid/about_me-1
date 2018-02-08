'use strict'


/*for (var x = 0; x < 4; x++){
  var myNumber = parseInt(prompt('Guess how much Gas tank my 2006 Honda Accord holds').toLowerCase().trim());
  console.log('my number' + myNumber);
  if (myNumber < 15){
    alert('Too low, try again');
  } if (myNumber > 15){
    alert ('Too high, try again');
   } if (myNumber === 15){
      alert ('You got it');
  }
*/


var scoreCorrect = 0;
var cityState = ['puyallup', 'tacoma', 'federal way'];
var totalGuess = 6;

var answerCorrect = false;
while(totalGuess > 0 && answerCorrect === false) {
  var userInput = prompt('Guess what City and States I lived in').toLowerCase().trim();
  for (var i = 0; i < cityState.length; i++){
    if (userInput === cityState[i]) {
      alert('good job');
      scoreCorrect +=1;
      answerCorrect = true;
      break;
    } 
  } if (i >= cityState.length){
    alert('oop, You\'re wrong ' + totalGuess);
    console.log(totalGuess);
    totalGuess --;
    
  }
}






             
          
        
      
    
      
      
    

          
        
      
  
