'use strict';

var answerOne = confirm('Are you ready to rumble??');

console.log(answerOne);

if (answerOne === true) {
  console.log('Let\'s get ready to rumble!!');
}
else {
  console.log('okay.');
}

var myBool = true;
var anotherBool = false;
var thirdBool = true;

if (myBool && thirdBool) {

  console.log('myBool and my thirdBool are true');
}

else if (myBool || anotherBool) {
  console.log('myBool OR anotherBool is true');
}

else if (thirdBool) {
  console.log('thirdBool is true');
}

//var testPrompt = prompt('Hello World!');
