import readlineSync from 'readline-sync';
import evenGame from './games/even';
import calcGame from './games/calc';
import gcdGame from './games/gcd';
import balanceGame from './games/balance';

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

export const runEvenGame = () => {
  greet();
  console.log(evenGame.rule);
  return gameLoop(evenGame.logic, getUsername(), 0);
};

export const runCalcGame = () => {
  greet();
  console.log(calcGame.rule);
  return gameLoop(calcGame.logic, getUsername(), 0);
};

export const runGcdGame = () => {
  greet();
  console.log(gcdGame.rule);
  return gameLoop(gcdGame.logic, getUsername(), 0);
};

export const runBalanceGame = () => {
  greet();
  console.log(balanceGame.rule);
  return gameLoop(balanceGame.logic, getUsername(), 0);
};

export const runGames = () => {
  greet();
  getUsername();
};
