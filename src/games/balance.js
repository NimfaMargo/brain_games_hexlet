import { getRandomArbitrary } from '../utils';
import runGame from '..';

const getBalanceNumber = (num) => {
  const arrStr = num.toString().split('').sort();
  const numArr = arrStr.map(el => parseInt(el, 10));

  const balancer = (arr) => {
    let max = arr[arr.length - 1];
    let min = arr[0];
    if (max - min > 1) {
      const diff = Math.floor((max - min) / 2);
      max -= diff;
      min += diff;
      arr.shift();
      arr.pop();
      arr.push(max);
      arr.push(min);
      return balancer(arr.sort());
    }
    return arr.join('');
  };
  return balancer(numArr);
};

const minNumber = 100;
const maxNumber = 1000;

const logic = () => {
  const question = getRandomArbitrary(minNumber, maxNumber);
  const balanceNum = getBalanceNumber(question);
  const answer = balanceNum;
  return { answer, question };
};

const game = {
  rule: 'Balance the given number.',
  logic,
};

const start = () => runGame(game);
export default start;
