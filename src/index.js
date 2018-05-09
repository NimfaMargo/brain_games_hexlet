import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to Brain Games!');
};
const showEvenGameRules = () => {
  console.log('Answer "yes" if number even otherwise answer "no". \n');
};
const getUsername = () => {
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  return username;
};

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;

const toBool = (answer) => {
  if (answer === 'yes' || answer === 'no') {
    return answer === 'yes';
  }
  return undefined;
};

const resultFormating = bool => (bool ? 'yes' : 'no');

const gameEven = (username, iter) => {
  const lastGameIterationValue = 3;
  if (iter === lastGameIterationValue) {
    return console.log(`Congratulations, ${username}!`);
  }
  const maxNum = 100;
  const randomNum = getRandomInt(maxNum);
  console.log('Question:', randomNum);
  const userAswer = readlineSync.question('Your answer: ');
  const message = (`'${userAswer}' is wrong answer ;(.
    Correct answer was '${resultFormating(isEven(randomNum))}'. Let's try again, ${username}`);

  if (toBool(userAswer) === isEven(randomNum)) {
    console.log('Correct!');
    return gameEven(username, iter + 1);
  }
  console.log(message);
  return true;
};

export const runEvenGame = () => {
  greetUser();
  showEvenGameRules();
  const username = getUsername();
  return gameEven(username, 0);
};

export const runGames = () => {
  console.log('Welcome to Brain Games!');
  const askName = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${askName}!`);
};
