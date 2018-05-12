import { getRandomNumber } from '../utils';
import runGame from '..';

const sum = { name: '+', value: (x, y) => x + y };
const subtraction = { name: '-', value: (x, y) => x - y };
const multiplication = { name: '*', value: (x, y) => x * y };
const operationsArr = [sum, subtraction, multiplication];
const randomIndex = Math.floor(Math.random() * operationsArr.length);
const maxNumber = 100;

const logic = () => {
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const mathOperation = operationsArr[randomIndex];
  const answer = mathOperation.value(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${mathOperation.name} ${randomNum2}`;
  return { answer, question };
};

const game = {
  rule: 'What is the result of the expression?',
  logic,
};

const start = () => runGame(game);
export default start;
