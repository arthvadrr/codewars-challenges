function calc(expression) {
    const operators = {
      '+': (a, b) => a + b,
      '-': (a, b) => a - b,
      '*': (a, b) => a * b,
      '/': (a, b) => a / b,
    };
  
    const precedence = {
      '+': 1,
      '-': 1,
      '*': 2,
      '/': 2,
    };
  
    const isOperator = (char) => precedence.hasOwnProperty(char);
  
    function applyOperator(operands, operators) {
      const operator = operators.pop();
      const b = operands.pop();
      const a = operands.pop();
      operands.push(operators[operator](a, b));
    }
  
    function parseExpression(expression) {
      const operands = [];
      const operatorStack = [];
  
      let number = '';
      for (let i = 0; i < expression.length; i++) {
        const char = expression[i];
  
        if (char === ' ') {
          continue;
        }
  
        if (isOperator(char)) {
          while (
            operatorStack.length > 0 &&
            isOperator(operatorStack[operatorStack.length - 1]) &&
            precedence[char] <= precedence[operatorStack[operatorStack.length - 1]]
          ) {
            applyOperator(operands, operators);
          }
          operatorStack.push(char);
        } else if (char === '(') {
          operatorStack.push(char);
        } else if (char === ')') {
          while (operatorStack.length > 0 && operatorStack[operatorStack.length - 1] !== '(') {
            applyOperator(operands, operators);
          }
          operatorStack.pop();
        } else {
          number += char;
          if (i === expression.length - 1 || isOperator(expression[i + 1]) || expression[i + 1] === ')' || expression[i + 1] === '(') {
            operands.push(parseFloat(number));
            number = '';
          }
        }
      }
  
      while (operatorStack.length > 0) {
        applyOperator(operands, operators);
      }
  
      return operands.pop();
    }
  
    return parseExpression(expression);
  }
  
  // Test cases
  const testCases = [
    ['1+1', 2],
    ['1 - 1', 0],
    ['1* 1', 1],
    ['1 /1', 1],
    ['-123', -123],
    ['123', 123],
    ['2 /2+3 * 4.75- -6', 21.25],
    ['12* 123', 1476],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
  ];
  
  testCases.forEach(([expression, expected]) => {
    const result = evaluateExpression(expression);
    console.log(`Expression: ${expression}`);
    console.log(`Result: ${result}`);
    console.log(`Expected: ${expected}`);
    console.log('-------------------------');
  });
  