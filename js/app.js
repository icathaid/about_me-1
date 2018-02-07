'use strict'

//My Name

var userName = prompt('Hi, glad you are here: What is your name?');
console.log('User was asked about their Name. User replies with a Name');
alert ('Hi, ' + userName + ', nice to meet you! I have few Questions for you. Please answer with y/n or yes/no.');

//Question #1

var answer1 = prompt('Do you think I like pets?').toLowerCase().trim();

if (answer1 === 'yes' || answer1 === 'y'){
    alert('Right! '+ userName + ' have a dog but no cats');
} else if
    (answer1 === 'no' || answer1 === 'n'){
    alert('Um, no, you\'re wrong!');
} else {
    alert('Sorry, That was not a valid answer. Maybe you made a typo, Lets Move to next question');
}
console.log('User was asked whether they like pets. User gave an answer to that question');

//Question #2

var answer2 = prompt('Next Question! Do you think I have a brother?').toLowerCase().trim();
if (answer2 === 'no' || answer2 === 'n'){
    alert('You\'re wrong, '+ userName + ' have 3 brothers living with him');
}
else if (answer2 === 'yes' || answer2 === 'y'){
    alert('Ha ha, you are Right, '+ userName + ' have Older brother and two younger brothers');
} else{
    alert('Invalid Response, follow the instructions');
}
console.log('User was asked if they have a Brother. User gave an answer to that question');

//Question #3

var answer3 = prompt('Next Question! Do you think I can ice skate?').toLowerCase().trim();
if (answer3 === 'no' || answer3 === 'n'){
    alert('Yay, you\'re Right, '+ userName + ' is horrible at ice skating');
}
else if (answer3 === 'yes' || answer3 === 'y'){
    alert('Wrong!!! '+ userName + ' cannot skate on ice. He can barely balance himself on ice');
}else {
    alert('Invalid Response, Go to next Question');
    }
console.log('User was asked if they can IceSkate. User gave an answer to that question');

//Question #4

var answer4 = prompt('Next Question! Do you think I like Math?').toLowerCase().trim();
if (answer4 === 'yes' || answer4 === 'y'){
    alert('You are Wrong!, Math was never a good topic for me, although, '+ userName + ' does know the Basics :))');
} else if (answer4 === 'n' || answer4 === 'no'){
    alert('Thats Correct, '+ userName + ' hates math. He would prefer IT class');
} else {
    alert('Invalid Answer, Lets move on to last Question');
}
console.log('User was asked if they like math. User gave an answer to that question');

//Question #5

var answer5 = prompt('Next Question! Do you think I drive to Code fellows?').toLowerCase().trim();
if (answer5 === 'yes' || answer5 === 'y'){
    alert('Yes, You are correct!, '+ userName + ' does commutes to Code Fellows on a bike');

}else if(answer5 === 'n' || answer5 === 'no'){
    alert('Wrong!!! '+ userName + ' does commutes to Code Fellows on a bike. It takes about 20 min to Train station, and about 20 min to Code Fellows');
}else {
    alert('Invalid Input, You\'re DONE!!!!');
}
console.log('User was asked if they drive to Code Fellows. User gave an answer to that question');


