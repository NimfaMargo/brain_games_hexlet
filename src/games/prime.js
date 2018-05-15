import { getRandomNumber } from '../utils';
import runGame from '..';

const maxNumber = 200;
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const run = () => {
  const question = getRandomNumber(maxNumber);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { answer, question };
};

const game = {
  rule: 'Answer "yes" if number prime otherwise answer "no".',
  run,
};

const start = () => runGame(game);
export default start;
