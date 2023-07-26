/*
https://www.codewars.com/kata/546dbd81018e956b51000077/train/javascript

The goal of this little kata to implement

    addition
    multiplication
    power

functions for Church numerals that are represented as

zero = f => x => x

succ = n => f => x => f (n (f) (x))

one = succ( zero )

// These definitions are actually in Preloaded

Syntax

You can define constants in Lambda Calculus syntax only: variables, function expressions, and function calls. Declare your definitions with const. Function expressions must use fat arrow syntax ( => ). Functions can have zero or one argument. You can define and use helper constants. Empty applications are allowed. Recursion is not restricted.

Some examples of valid syntax:

const pair = a => b => c => c(a)(b)
const zero = f => x => x
const cons = pair

Some examples of invalid syntax:

one = f => x => f(x);                // semicolons (;) are not allowed
function head(l) { return l(true) }  // functions must use fat arrow notation
fold = f => x => l => l.reduce(f, x) // only variables, functions and applications are allowed; property accessors (.), or functions taking multiple arguments, are not allowed
*/

const add = a => b => b(succ)(a)
const mul = a => b => a(add(b))(zero)
const pow = a => b => b(mul(a))(one)