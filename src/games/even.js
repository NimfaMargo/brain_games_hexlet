import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from '../utils';

const defineRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const maxNumber = 100;


const logic = () => {
  const question = getRandomNumber(maxNumber);
  const rightAnswer = defineRightAnswer(question);
  console.log(`Question: ${question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  return { right: rightAnswer, user: userAnswer };
};

const game = {
  rules: 'Answer "yes" if number even otherwise answer "no". \n',
  logic,
};

export default game;
