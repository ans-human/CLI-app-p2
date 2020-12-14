var readlineSync = require('readline-sync');
const chalk = require('chalk');

///////////////////////////////////////////////////////////////////////////
console.log('================================');
console.log(chalk.black.bgGreen.bold('Welcome THE OFFICE(US) Quiz'));
console.log('================================');
///////////////////////////////////////////////////////////////////////////

var userName = readlineSync.question('Tell me your name please? ');
console.log('Hi ' + chalk.red(userName+ '!'));
console.log(chalk.cyan('Instructions: \n1.Answer by entering the option alphabet \n2.Enter \'e\' to stop the game'))

var score = 0, highScore = 0;

function play(question) {
  console.log('------------------------------------------------------------\n'
            + chalk.yellow(question.question) + '\n' 
            + question.option1 + '\n'
            + question.option2 + '\n'
            + question.option3);

  var userAnswer = readlineSync.question();
  
  if( question.answer.toUpperCase() === userAnswer.toUpperCase() ) {
    console.log(chalk.green("right!"));
    score++;
  }
  else if( userAnswer.toUpperCase() === 'E'){
    process.exit();
  }
  else {
    console.log(chalk.red("wrong!"));
  }

  console.log(chalk.cyan("Your score :" + score));
  
} 

//function to shuffle the questions
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
}


var queBank = [
  {
    question: 'Dunder Mifflin is a?',
    option1: 'a. Paper company',
    option2: 'b. Steel company',
    option3: 'c. Software company',
    answer: 'a',
  },
  {
    question: 'Who is the regional manager at Dunder Mifflin, Scranton Branch?',
    option1: 'a. Jim Halpert',
    option2: 'b. Micheal Schott',
    option3: 'c. Dwight K Schrute',
    answer: 'b',
  },
  {
    question: 'What is the middle name of Micheal Scott?',
    option1: 'a. Lewis',
    option2: 'b. Carl',
    option3: 'c. Gary',
    answer: 'c',
  },
  {
    question: 'Longest interim manager at the Scranton Branch of Dunder Mifflin?',
    option1: 'a. Jim Halpert',
    option2: 'b. Phyllis',
    option3: 'c. Creed Bratton',
    answer: 'c',
  },
  {
    question: 'Who was the regional manager at Dunder Mifflin, Scranton Branch?',
    option1: 'a. Jim Halpert',
    option2: 'b. Micheal Schott',
    option3: 'c. Dwight K Schrute',
    answer: 'b',
  },
  {
    question: 'The kid of Pam and Jim is named ',
    option1: 'a. Kuku',
    option2: 'b. Peepa',
    option3: 'c. Cece',
    answer: 'c',
  },
  {
    question: 'Who was the assistant to the regional manager at Dunder Mifflin, Scranton Branch?',
    option1: 'a. Jim Halpert',
    option2: 'b. Micheal Schott',
    option3: 'c. Dwight K Schrute',
    answer: 'c',
  },
  {
    question: 'Dwight has a farm field of which vegetable',
    option1: 'a. Potato',
    option2: 'b. Beets',
    option3: 'c. Cauliflower',
    answer: 'b',
  },
  {
    question: 'Which one of the following are not gay?',
    option1: 'a. Oscar Martinez',
    option2: 'b. Robert the state senator',
    option3: 'c. Dwight K Schrute',
    answer: 'c',
  },
  {
    question: 'The most hated person by Micheal Scott at the office is',
    option1: 'a. Jim Halpert',
    option2: 'b. Toby flenderson',
    option3: 'c. Dwight K Schrute',
    answer: 'b',
  },
  {
    question: 'According to Micheal Scott, he sometimes start a sentence and...',
    option1: 'a. does not know where it\'s going?',
    option2: 'b. finishes well',
    option3: 'c. takes it to perfect conclusion',
    answer: 'a',
  },
  {
    question: 'Micheal Scott\'s movie is named',
    option1: 'a. Threat level Avengers',
    option2: 'b. Threat level Midnight',
    option3: 'c. Threat level hundred',
    answer: 'b',
  },
  {
    question: 'Surname of Micheal Scott in his movie is?',
    option1: 'a. Schrute',
    option2: 'b. Scond',
    option3: 'c. Scarn',
    answer: 'c',
  },
]

var wantsToPlay = 'y';
while(wantsToPlay === 'y'){
  //shuffling the questions
  shuffle(queBank)

  for( var i = 0; i < 5; i++) {
   play(queBank[i]);
  }

  console.log("Wow, You socred :"+ score);
  if( score > highScore ) {
    console.log('=================================')
    console.log('YAY! You made a new High score!')
    highScore = score;
  }
  console.log(chalk.bgBlue('Highest score :'+ highScore));
  wantsToPlay = readlineSync.question("Want to play again? (y/n)");
  console.log(wantsToPlay);
  if(wantsToPlay === 'n') {
    wantsToPlay = 0;
  } 
  
}


