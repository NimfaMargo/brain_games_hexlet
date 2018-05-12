import readlineSync from 'readline-sync';

const greet = () => console.log('Welcome to Brain Games!');
export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  return username;
};

const lastGameLap = 3;

const gameLoop = (gameLogic, username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const game = gameLogic(lap);
  console.log(`Question: ${game.question}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const rightAnswer = game.answer;
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    gameLoop(gameLogic, username, lap + 1);
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(.
    Correct answer was '${rightAnswer}'. Let's try again, ${username}`);
  }
};

export const runGame = (game) => {
  greet();
  console.log(game.rule);
  return gameLoop(game.logic, getUsername(), 0);
};

export const runGames = () => {
  greet();
  getUsername();
};
