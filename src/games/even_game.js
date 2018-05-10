import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../utils';
import { getUsername } from '..';

const defineRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const lastGameLap = 3;
const maxAllowedNumber = 100;

const gameEven = (username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const question = getRandomNumber(maxAllowedNumber);
  const rightAnswer = defineRightAnswer(question);

  console.log('Question:', question);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    gameEven(username, lap + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(.
    Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};

const runEvenGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  return gameEven(getUsername(), 0);
};


export default runEvenGame;
