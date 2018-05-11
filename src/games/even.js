import { getRandomNumber, isEven } from '../utils';

const defineRightAnswer = number => (isEven(number) ? 'yes' : 'no');
const maxNumber = 100;

const logic = () => {
  const question = getRandomNumber(maxNumber);
  const answer = defineRightAnswer(question);
  return { answer, question };
};

const game = {
  rule: 'Answer "yes" if number even otherwise answer "no". \n',
  logic,
};
export default game;
