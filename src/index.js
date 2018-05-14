import readlineSync from 'readline-sync';

const startGameLap = 1;
const endGameLap = 4;

const gameLoop = (gameFunction, username, lap) => {
  if (lap === endGameLap) {
    return true;
  }
  const game = gameFunction();
  console.log(`Question: ${game.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = game.answer;
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return gameLoop(gameFunction, username, lap + 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const runGame = (game) => {
  console.log('Welcome to Brain Games!');
  console.log(`${game.rule} \n`);
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  const result = gameLoop(game.run, username, startGameLap) ? console.log(`Congratulations, ${username}!`) : console.log(`Let's try again, ${username}`);
  return result;
};

export default runGame;
