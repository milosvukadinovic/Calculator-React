import operate from './operate';

const calculate = (mut, button) => {
  const info = mut;
  if (button === 'AC') {
    return {
      total: null,
      next: null,
      operation: null,
    };
  }
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(button, 10))) {
    if (button === '0' && info.next === '0') {
      return {};
    }
    if (info.operation) {
      if (info.next) {
        return {
          next: info.next + button,
        };
      }
      return {
        next: button,
      };
    }
    if (info.next) {
      return {
        next: info.next + button,
        total: null,
      };
    }
    return {
      next: button,
      total: null,
    };
  }
  if (button === '.') {
    if (info.next) {
      if (info.next.includes('.')) {
        return {};
      }
      return {
        next: info.next + button,
      };
    }

    if (info.operation) {
      return {
        next: '0.',
      };
    }

    if (info.total) {
      if (info.total.includes('.')) {
        return {};
      }
      return {
        next: `${info.total}.`,
      };
    }

    return {
      next: '0.',
    };
  }
  if (button === '=') {
    if (info.next && info.operation) {
      return {
        total: operate(info.total, info.next, info.operation),
        next: null,
        operation: null,
      };
    }
    return {};
  }


  if (button === '+/-') {
    if (info.next) {
      return {
        next: (-1 * parseFloat(info.next)).toString(),
      };
    }
    if (info.total) {
      return {
        total: (-1 * parseFloat(info.total)).toString(),
      };
    }
    return {};
  }
  if (button === '%') {
    if (info.operation) {
      info.total = operate(info.total, info.next, info.operation);
      info.next = null;
      info.operation = null;
    }
    if (info.next) {
      info.total = info.next;
      info.next = null;
      info.operation = null;
    }
    return {
      total: operate(info.total, 100, '%'),
    };
  }
  if (!info.next) {
    return { operation: button };
  }
  return {
    total: info.next,
    next: null,
    operation: button,
  };
};
export default calculate;
