import { getRandomArbitrary, getBalanceNumber } from '../utils';

const minNumber = 100;
const maxNumber = 1000;

const logic = () => {
  const question = getRandomArbitrary(minNumber, maxNumber);
  const balanceNum = getBalanceNumber(question);
  const answer = balanceNum;
  return { answer, question };
};

const game = {
  rule: 'Balance the given number. \n',
  logic,
};

export default game;
