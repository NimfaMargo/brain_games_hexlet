import readlineSync from 'readline-sync';
import { getRandomNumber, gcd } from '../utils';

const defineRightAnswer = (num1, num2) => gcd(num1, num2);
const maxNumber = 100;

const logic = () => {
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const rightAnswer = defineRightAnswer(randomNum1, randomNum2).toString();
  console.log(`Question: ${randomNum1} ${randomNum2}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { right: rightAnswer, user: userAnswer };
};

const game = {
  rules: 'Find the greatest common divisor of given numbers. \n',
  logic,
};

export default game;
