import { getRandomNumber } from '../utils';
import runGame from '..';

const maxNumber = 200;
const isPrimeNum = (num) => {
  if (num === 1 || num === 2) {
    return 'yes';
  }
  let answer = '';
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      answer = 'no';
      break;
    }
    answer = 'yes';
  }
  return answer;
};

const logic = () => {
  const question = getRandomNumber(maxNumber);
  const answer = isPrimeNum(question);
  return { answer, question };
};

const game = {
  rule: 'Answer "yes" if number even otherwise answer "no".',
  logic,
};

const start = () => runGame(game);
export default start;
