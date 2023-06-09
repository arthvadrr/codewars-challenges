<<<<<<< Updated upstream
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
=======
/*
 * Instructions
 *
 * Given a mathematical expression as a string you must return the result as a number.
 * Numbers
 *
 * Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.
 * Operators
 *
 * You need to support the following mathematical operators:
 *
 *     Multiplication *
 *         Division / (as floating point division)
 *             Addition +
 *                 Subtraction -
 *
 *                 Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.
 *                 Parentheses
 *
 *                 You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6
 *                 Whitespace
 *
 *                 There may or may not be whitespace between numbers and operators.
 *
 *                 An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.
 *
 *                 1-1    // 0
 *                 1 -1   // 0
 *                 1- 1   // 0
 *                 1 - 1  // 0
 *                 1- -1  // 2
 *                 1 - -1 // 2
 *                 1--1   // 2
 *
 *                 6 + -(4)   // 2
 *                 6 + -( -4) // 10
 *
 *                 And the following are invalid expressions
 *
 *                 1 - - 1    // Invalid
 *                 1- - 1     // Invalid
 *                 6 + - (4)  // Invalid
 *                 6 + -(- 4) // Invalid
 *
 *                 Validation
 *
 *                 You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.
 *                 Restricted APIs
 *
 *                 NOTE: Both eval and Function are disabled.
 *                 
 */

const calc = exp => {
  let result = 0;
  let expArr = exp.split('');

  let tree = {
    'left': {
      0: [],
    },
    'right': {
      0: []
    },
    op: null
  }

  const calc = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => a / b
  }
  
  let isInParens = 0;

  for (let i = 0; i < expArr.length; i++) {
    if (expArr[i] === '(') isInParens++;
    if (expArr[i] === ')') isInParens--;

    if (isInParens) continue;

    if (
      expArr[i] === '+' ||
      expArr[i] === '-' ||
      expArr[i] === '/' ||
      expArr[i] === '*'
    ) {
      tree.op = expArr.splice(i, 1);
      tree['left'][0] = expArr.slice(0, i);
      tree['right'][0] = expArr.slice(i);
    }
  }

  const addBranch = (side, depth) => {
    let start = -1;
    let end = -1;
    let stack = 0;

    console.log(tree[side], 'tree side');
    console.log(tree[side][depth], 'tree depth');
    for (let i = 0; i < tree[side][depth].length; i++) {
      if (tree[side][depth][i] === '(') {
        if (stack === 0) start = i;
        stack++;
      }

      if (tree[side][depth][i] === ')') {
        if (stack === 1) end = i;
        stack--;
      }
    }
    console.log(start, 'start');
    console.log(end, 'end');

    depth += 1;

    const newArr =  tree[side][depth - 1].splice(start, (end - start) + 1);
    newArr.shift();
    newArr.pop();
    console.log(newArr, 'newarr');
    tree[side][depth] = newArr;
    
    if (tree[side][depth].includes('(')) {
      addBranch(side, depth);
    }
  }

  if (tree['left'][0].includes('(')) {
    addBranch('left', 0);
  }

  if (tree['right'][0].includes('(')) {
    addBranch('right', 0);
  }

    console.log(tree);

  return result;
}


const tests = [
>>>>>>> Stashed changes
    ['1+1', 2],
    ['1 - 1', 0],
    ['1* 1', 1],
    ['1 /1', 1],
    ['-123', -123],
    ['123', 123],
    ['2 /2+3 * 4.75- -6', 21.25],
    ['12* 123', 1476],
    ['2 / (2 + 3) * 4.33 - -6', 7.732],
<<<<<<< Updated upstream
  ];
  
  testCases.forEach(([expression, expected]) => {
    const result = evaluateExpression(expression);
    console.log(`Expression: ${expression}`);
    console.log(`Result: ${result}`);
    console.log(`Expected: ${expected}`);
    console.log('-------------------------');
  });
  
=======
    ['(2 + (4 + 6)) - (6 + (7 * 12))']
];

for ( const [input,expected] of tests ) {
  console.log(input, expected);
  console.log(calc(input));
  console.log('next');
}
>>>>>>> Stashed changes
