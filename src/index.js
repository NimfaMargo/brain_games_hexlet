import readlineSync from 'readline-sync';

const firstGameLap = 1;
const lastGameLap = 4;

const gameLoop = (gameFunction, username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const game = gameFunction();
  console.log(`Question: ${game.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = game.answer;
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    gameLoop(gameFunction, username, lap + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};

const runGame = (game) => {
  console.log('Welcome to Brain Games!');
  console.log(`${game.rule} \n`);
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  return gameLoop(game.logic, username, firstGameLap);
};

export default runGame;
