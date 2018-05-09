
import readlineSync from 'readline-sync';

const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
const isEven = num => num % 2 === 0;

const toBool = (answer) => {
  if (answer === 'yes' || answer === 'no') {
    return answer === 'yes';
  }
  return undefined;
};

const resultFormating = bool => (bool ? 'yes' : 'no');

const gameEven = (username, iter) => {
  const lastGameIterationValue = 3;
  if (iter === lastGameIterationValue) {
    return console.log(`Congratulations, ${username}!`);
  }
  const maxNum = 100;
  const randomNum = getRandomInt(maxNum);
  console.log('Question:', randomNum);
  const userAswer = readlineSync.question('Your answer: ');
  const looseMessage = (`'${userAswer}' is wrong answer ;(.
    Correct answer was '${resultFormating(isEven(randomNum))}'. Let's try again, ${username}`);

  if (toBool(userAswer) === isEven(randomNum)) {
    console.log('Correct!');
    return gameEven(username, iter + 1);
  }
  console.log(looseMessage);
  return true;
};
export default gameEven;
