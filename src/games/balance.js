import { getRandomArbitrary } from '../utils';
import runGame from '..';

const getBalancedNumber = (num) => {
  const arrStr = num.toString().split('');
  const numArr = arrStr.map(el => parseInt(el, 10));
  let sum = numArr.reduce((acc, currentValue) => acc + currentValue, 0);
  const min = Math.floor(sum / (numArr.length));
  const max = min + 1;
  const newArr = [];

  for (let iter = numArr.length - 1; iter >= 0; iter -= 1) {
    if (sum - max >= min * (iter)) {
      newArr.push(max);
      sum -= max;
    } else {
      newArr.push(min);
      sum -= min;
    }
  }
  return parseInt(newArr.sort().join(''), 10);
};

const minNumber = 100;
const maxNumber = 1000;

const run = () => {
  const question = getRandomArbitrary(minNumber, maxNumber);
  const balanceNum = getBalancedNumber(question).toString();
  return { answer: balanceNum, question };
};

const game = {
  rule: 'Balance the given number.',
  run,
};

const start = () => runGame(game);
export default start;
