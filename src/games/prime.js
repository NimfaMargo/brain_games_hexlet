import { getRandomNumber } from '../utils';
import runGame from '..';

const maxNumber = 200;
const isPrime = (num) => {
  if (num === 2) {
    return true;
  }
  let answer = '';
  for (let i = 2; i < 10; i += 1) {
    if (num % i === 0) {
      answer = false;
      break;
    }
    answer = true;
  }
  return answer;
};

const run = () => {
  const question = getRandomNumber(maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { answer, question };
};

const game = {
  rule: 'Answer "yes" if number even otherwise answer "no".',
  run,
};

const start = () => runGame(game);
export default start;
