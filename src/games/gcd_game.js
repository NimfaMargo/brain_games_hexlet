import readlineSync from 'readline-sync';
import { getRandomNumber, gcd } from '../utils';
import { getUsername } from '..';

const defineRightAnswer = (num1, num2) => gcd(num1, num2);
const maxNumber = 100;
const lastGameLap = 3;

const gameGcd = (username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const rightAnswer = defineRightAnswer(randomNum1, randomNum2).toString();

  console.log('Question:', randomNum1, randomNum2);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    gameGcd(username, lap + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(.
    Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};

const runGcdGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Find the greatest common divisor of given numbers. \n');
  return gameGcd(getUsername(), 0);
};
export default runGcdGame;
