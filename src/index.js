import readlineSync from 'readline-sync';
import gameEven from './even_game';
import gameCalc from './calc_game';

const getUsername = () => {
  const username = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
  console.log(`Hello, ${username}!\n`);
  return username;
};

export const runEvenGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no". \n');
  const username = getUsername();
  return gameEven(username, 0);
};

export const runCalcGame = () => {
  console.log('Welcome to Brain Games!');
  console.log('What is the result of the expression?. \n');
  const username = getUsername();
  return gameCalc(username, 0);
};

export const runGames = () => {
  console.log('Welcome to Brain Games!');
  getUsername();
};
