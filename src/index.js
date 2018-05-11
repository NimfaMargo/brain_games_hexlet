import readlineSync from 'readline-sync';

export const getUsername = () => {
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  return username;
};

const lastGameLap = 3;

const gameLoop = (questionFunc, username, lap) => {
  if (lap === lastGameLap) {
    console.log(`Congratulations, ${username}!`);
    return;
  }
  const answer = questionFunc(lap);

  if (answer.user === answer.right) {
    console.log('Correct!');
    gameLoop(questionFunc, username, lap + 1);
  } else {
    console.log(`'${answer.user}' is wrong answer ;(.
    Correct answer was '${answer.right}'. Let's try again, ${username}`);
  }
};

export const runGame = (game) => {
  console.log('Welcome to Brain Games!');
  console.log(game.rules);
  return gameLoop(game.logic, getUsername(), 0);
};

export const runGames = () => {
  console.log('Welcome to Brain Games!');
  getUsername();
};
