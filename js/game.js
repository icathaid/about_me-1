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

var cityState = ['Puyallup', 'Tacoma', 'Federal\ Way', 'Russia', 'Washington', 'Oregon'];
var totalGuess = 0;
var flag = true;
  while(totalGuess < 6 && flag === false) {
    var userInput = prompt('Guess what City and States I lived in').toLowerCase().trim();
    for (var i = 0; i < cityState.length; i++) {
    var state = cityState[i];
    if (state === userInput) {
      alert('good job');
      flag = true;
      } else {
      alert('oops, You\'re wrong');
  } if (state[1] = userInput){
      alert('good job');
      flag = true;
      } else {
      alert('oops, You\'re wrong');
  } if (state[2] = userInput) {
      alert('good job');
      } else {
      alert('oops, You\'re wrong');
  } if (state[3] = userInput){
      alert('good job');
      } else {
      alert('oops, You\'re wrong');
  } if (state[4] = userInput){
      alert('good job');
    } else {
      alert('oops, You\'re wrong');
  } if (state[5] = userInput){
      alert('Good Job');
    } else {
      alert('oops, You\'re wrong');
  } if (state[6] = userInput){
      alert('Good job');
    } else {
      alert('oops, You\'re wrong');
    }   
    }
    }






             
          
        
      
    
      
      
    

          
        
      
  
