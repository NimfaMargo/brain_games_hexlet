import { getRandomNumber } from '../utils';
import runGame from '..';

const isEven = num => num % 2 === 0;
const defineRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const maxNumber = 100;

const logic = () => {
  const question = getRandomNumber(maxNumber);
  const answer = defineRightAnswer(question);
  return { answer, question };
};

const game = {
  rule: 'Answer "yes" if number even otherwise answer "no".',
  logic,
};

const start = () => runGame(game);
export default start;
