import { getRandomNumber as random } from '../utils';
import runGame from '..';

const getProgression = (firstElem, length, difference) => {
  const newArr = [];
  for (let i = 1; i <= length; i += 1) {
    const elem = firstElem + (difference * (i - 1));
    newArr.push(elem);
  }
  return newArr;
};

const logic = () => {
  const maxNumber = 10;
  const length = 10;
  const progression = getProgression(random(maxNumber), length, random(maxNumber));
  const indexOfMissElem = random(maxNumber);
  const answer = progression[indexOfMissElem];
  progression[indexOfMissElem] = '..';
  const question = progression.join(' ');
  return { answer: answer.toString(), question };
};

const game = {
  rule: 'What number is missing in this progression?',
  logic,
};

const start = () => runGame(game);
export default start;
