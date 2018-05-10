export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));
export const isEven = num => num % 2 === 0;

export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return gcd(num2, num1 % num2);
};
