var readlineSync = require('readline-sync');
 
console.log('================================');
console.log('welcome to DO YOU KNOW ANSHUMAN!');
console.log('================================');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var score = 0, highScore = 0;

function play(question) {

  var userAnswer = readlineSync.question(question.question+ " :");

  if( question.answer.toUpperCase() === userAnswer.toUpperCase() ) {
    console.log("right!");
    score++;
  }
  else {
    console.log("wrong!");
  }

  console.log("Your score :" + score);
  console.log('------------------------------------')
} 

var queBank = [
  {
    question: 'How old am I?',
    answer: '18'
  },
  {
    question: 'Where do I live?',
    answer: 'Delhi'
  },
  {
    question: 'Where is my college?',
    answer: 'Varanasi'  
  }
]

for( var i = 0; i < queBank.length; i++) {
  play(queBank[i]);
}

console.log("YAY! You socred :"+ score);
if( score > highScore ) {
  console.log('------------------------------------')
  console.log('Wow! You made a new High score!');
  console.log('------------------------------------')

  highScore = score;
}
console.log('Highest score :'+ highScore);