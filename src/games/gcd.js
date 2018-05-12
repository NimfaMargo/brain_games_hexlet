import { getRandomNumber, gcd } from '../utils';
import { runGame } from '..';

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
  rule: 'Find the greatest common divisor of given numbers. \n',
  logic,
};

const start = () => runGame(game);
export default start;
