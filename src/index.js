import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!');
export const askName = readlineSync.question('May I have your name? ' ,{
  defaultInput: 'Anonim'});
console.log(`Hello, ${askName}!`);
