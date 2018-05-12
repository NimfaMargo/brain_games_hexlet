import { getRandomNumber } from '../utils';
import runGame from '..';

const gcd = (num1, num2) => (num2 === 0 ? Math.abs(num1) : gcd(num2, num1 % num2));
const defineRightAnswer = (num1, num2) => gcd(num1, num2);
const maxNumber = 100;

const logic = () => {
  const randomNum1 = getRandomNumber(maxNumber);
  const randomNum2 = getRandomNumber(maxNumber);
  const answer = defineRightAnswer(randomNum1, randomNum2).toString();
  const question = `${randomNum1} ${randomNum2}`;
  return { answer, question };
};

const game = {
  rule: 'Find the greatest common divisor of given numbers.',
  logic,
};

const start = () => runGame(game);
export default start;
