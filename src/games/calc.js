import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils';

const sum = { name: '+', value: (x, y) => x + y };
const subtraction = { name: '-', value: (x, y) => x - y };
const multiplication = { name: '*', value: (x, y) => x * y };
const operationsArr = [sum, subtraction, multiplication];
const maxNumber = 100;

export const logic = (lap) => {
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const mathOperation = operationsArr[lap];
  const rightAnswer = mathOperation.value(randomNum1, randomNum2).toString();
  console.log(`Question: ${randomNum1} ${mathOperation.name} ${randomNum2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { right: rightAnswer, user: userAnswer };
};

const game = {
  rules: 'What is the result of the expression? \n',
  logic,
};

export default game;
