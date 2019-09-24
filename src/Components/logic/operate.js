/* eslint-disable */
import Big from 'big.js';
/* eslint-enable */
/* eslint-disable no-alert */

const operate = (numberA, numberB, operation) => {
  const a = new Big(numberA);
  const b = new Big(numberB);
  // eslint-disable-next-line eqeqeq
  if (b == 0 && operation === '/') {
    return "Error";
  }
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
      return "Error";
  }
};
export default operate;
