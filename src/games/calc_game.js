import readlineSync from 'readline-sync';
import { getRandomNumber as random } from '../utils';
import { getUsername } from '..';

const sum = { name: '+', value: (x, y) => x + y };
const subtraction = { name: '-', value: (x, y) => x - y };
const multiplication = { name: '*', value: (x, y) => x * y };
const operationsArr = [sum, subtraction, multiplication];
const startIn = 0;
const maxNumber = 100;
const lastGameLap = 3;

const gameCalc = (num1, num2, username, mathOperation, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const rightAnswer = mathOperation.value(num1, num2).toString();
  console.log('Question:', `${num1} ${mathOperation.name} ${num2}`);
  const userAnswer = readlineSync.question('Your answer: ');

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    gameCalc(random(maxNumber), random(maxNumber), username, operationsArr[startIn + 1], lap + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(.
    Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};

const runCalcGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?. \n');
  const username = getUsername();
  return gameCalc(random(maxNumber), random(maxNumber), username, operationsArr[startIn], 0);
};

export default runCalcGame;
