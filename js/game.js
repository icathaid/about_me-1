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

var cityState = ['Puyallup', 'Tacoma', 'Federal\ Way', 'Russia', 'Washington'];
var totalGuess = 0;
var flag = true;
while(totalGuess < 6) && (flag === false)  {
  var userImput = prompt('Guess what City and States I lived in').toLowerCase().trim();
  for (var i = 0; i < cityState.length; i++) {
    var state = cityState[i];
    if (state === userImput) {
      alert('good job');
      flag = true
    } else {
      alert('oops, got it wrong');
      if (state[1] = userImput){
        alert('good job');
      }else {
        alert('oops, got it wrong');
      } if ()

      }
      
    }
  }
}






for (var i = 0; i < cityState.length; i++){
if (
  userImput[i]  )
  cityState
  alert(cityState[x]
  } if (