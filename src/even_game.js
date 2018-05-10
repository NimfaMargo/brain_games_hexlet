import readlineSync from 'readline-sync';
import { getRandomNumber, isEven } from './num_operations';

const defineRightAnswer = number => (isEven(number) ? 'yes' : 'no');

const lastGameLap = 3;
const maxAllowedNumber = 100;

const gameEven = (username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const questionNumber = getRandomNumber(maxAllowedNumber);
  const rightAnswer = defineRightAnswer(questionNumber);

  console.log('Question:', questionNumber);
  const userAswer = readlineSync.question('Your answer: ');

  if (userAswer === rightAnswer) {
    console.log('Correct!');
    gameEven(username, lap + 1);
  } else {
    console.log(`'${userAswer}' is wrong answer ;(.
    Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};
export default gameEven;
