import { getRandomNumber } from '../utils';

const sum = { name: '+', value: (x, y) => x + y };
const subtraction = { name: '-', value: (x, y) => x - y };
const multiplication = { name: '*', value: (x, y) => x * y };
const operationsArr = [sum, subtraction, multiplication];
const maxNumber = 100;

const logic = (lap) => {
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const mathOperation = operationsArr[lap];
  const answer = mathOperation.value(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${mathOperation.name} ${randomNum2}`;
  return { answer, question };
};

const game = {
  rule: 'What is the result of the expression? \n',
  logic,
};

export default game;
