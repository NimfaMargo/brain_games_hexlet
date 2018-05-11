export const getRandomNumber = max => Math.floor(Math.random() * Math.floor(max));
export const getRandomArbitrary = (min, max) => Math.floor((Math.random() * (max - min)) + min);

export const isEven = num => num % 2 === 0;
export const gcd = (num1, num2) => {
  if (num2 === 0) {
    return Math.abs(num1);
  }
  return gcd(num2, num1 % num2);
};

export const getBalanceNumber = (num) => {
  const arrStr = num.toString().split('').sort();
  const numArr = arrStr.map(el => parseInt(el, 10));

  const balancer = (arr) => {
    let max = arr[arr.length - 1];
    let min = arr[0];
    if (max - min > 2) {
      const diff = Math.floor((max - min) / 2);
      max -= diff;
      min += diff;
      arr.shift();
      arr.pop();
      arr.push(max);
      arr.push(min);
      return balancer(arr.sort());
    }
    return arr.join('');
  };
  return balancer(numArr);
};
