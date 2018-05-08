import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!');
const askName = readlineSync.question('May I have your name? ', { defaultInput: 'Anonim' });
console.log(`Hello, ${askName}!`);
export default askName;
