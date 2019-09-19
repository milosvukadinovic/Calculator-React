/* eslint-disable no-alert */
import Big from 'big.js';

const operate = (numberA, numberB, operation) => {
  const a = new Big(numberA);
  const b = new Big(numberB);

  switch (operation) {
    case '+':
      return a.plus(b).toString();
    case '-':
      return a.minus(b).toString();
    case 'X':
      return a.times(b).toString();
    case '/':
      return a.div(b).toString();
    case '%':
      return a.div(b).toString();
    default:
      window.alert('Wrong operation');
  }
  return false;
};
export default operate;
