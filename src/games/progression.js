import { getRandomNumber as random } from '../utils';
import runGame from '..';

const getProgression = (firstElem, length, diference) => {
  const newArr = [];
  for (let i = 1; i <= length; i += 1) {
    const elem = firstElem + (diference * (i - 1));
    newArr.push(elem);
  }
  return newArr;
};

const logic = () => {
  const maxNumber = 10;
  const indexOflastElem = 10;
  const progression = getProgression(random(maxNumber), indexOflastElem, random(maxNumber));
  const indexOfMissElem = random(maxNumber);
  const question = `${progression.slice(0, indexOfMissElem).join(' ')} .. ${progression.slice(indexOfMissElem + 1, indexOflastElem).join(' ')}`;
  const answer = progression[indexOfMissElem];
  return { answer: answer.toString(), question };
};

const game = {
  rule: 'What number is missing in this progression?',
  logic,
};

const start = () => runGame(game);
export default start;
