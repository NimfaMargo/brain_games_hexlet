import readlineSync from 'readline-sync';

const gamesCount = 3;

const gameLoop = (gameFunction, lap) => {
  if (lap === gamesCount) {
    return true;
  }
  const game = gameFunction();
  console.log(`Question: ${game.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = game.answer;
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return gameLoop(gameFunction, lap + 1);
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  return false;
};

const runGame = (game) => {
  console.log('Welcome to Brain Games!');
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  console.log(`${game.rule} \n`);

  if (gameLoop(game.run, 0)) {
    console.log(`Congratulations, ${username}!`);
  } else {
    console.log(`Let's try again, ${username}`);
  }
};

export default runGame;
