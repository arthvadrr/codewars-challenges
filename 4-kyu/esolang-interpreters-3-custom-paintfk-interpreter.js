/*
https://www.codewars.com/kata/5868a68ba44cfc763e00008d/train/javascript

Esolang Interpreters #3 - Custom Paintfuck Interpreter
About this Kata Series

"Esolang Interpreters" is a Kata Series that originally began as three separate, independent esolang interpreter Kata authored by @donaldsebleung which all shared a similar format and were all somewhat inter-related. Under the influence of a fellow Codewarrior, these three high-level inter-related Kata gradually evolved into what is known today as the "Esolang Interpreters" series.

This series is a high-level Kata Series designed to challenge the minds of bright and daring programmers by implementing interpreters for various esoteric programming languages/Esolangs, mainly Brainfuck derivatives but not limited to them, given a certain specification for a certain Esolang. Perhaps the only exception to this rule is the very first Kata in this Series which is intended as an introduction/taster to the world of esoteric programming languages and writing interpreters for them.
The Language

Paintfuck is a borderline-esoteric programming language/Esolang which is a derivative of Smallfuck (itself a derivative of the famous Brainfuck) that uses a two-dimensional data grid instead of a one-dimensional tape.

Valid commands in Paintfuck include:

    n - Move data pointer north (up)
    e - Move data pointer east (right)
    s - Move data pointer south (down)
    w - Move data pointer west (left)
    * - Flip the bit at the current cell (same as in Smallfuck)
    [ - Jump past matching ] if bit under current pointer is 0 (same as in Smallfuck)
    ] - Jump back to the matching [ (if bit under current pointer is nonzero) (same as in Smallfuck)

The specification states that any non-command character (i.e. any character other than those mentioned above) should simply be ignored. The output of the interpreter is the two-dimensional data grid itself, best as animation as the interpreter is running, but at least a representation of the data grid itself after a certain number of iterations (explained later in task).

In current implementations, the 2D datagrid is finite in size with toroidal (wrapping) behaviour. This is one of the few major differences of Paintfuck from Smallfuck as Smallfuck terminates (normally) whenever the pointer exceeds the bounds of the tape.

Similar to Smallfuck, Paintfuck is Turing-complete if and only if the 2D data grid/canvas were unlimited in size. However, since the size of the data grid is defined to be finite, it acts like a finite state machine.

More info on this Esolang can be found here.
The Task

Your task is to implement a custom Paintfuck interpreter interpreter()/Interpret which accepts the following arguments in the specified order:

    code - Required. The Paintfuck code to be executed, passed in as a string. May contain comments (non-command characters), in which case your interpreter should simply ignore them. If empty, simply return the initial state of the data grid.
    iterations - Required. A non-negative integer specifying the number of iterations to be performed before the final state of the data grid is returned. See notes for definition of 1 iteration. If equal to zero, simply return the initial state of the data grid.
    width - Required. The width of the data grid in terms of the number of data cells in each row, passed in as a positive integer.
    height - Required. The height of the data grid in cells (i.e. number of rows) passed in as a positive integer.

A few things to note:

    Your interpreter should treat all command characters as case-sensitive so N, E, S and W are not valid command characters
    Your interpreter should initialize all cells within the data grid to a value of 0 regardless of the width and height of the grid
    In this implementation, your pointer must always start at the top-left hand corner of the data grid (i.e. first row, first column). This is important as some implementations have the data pointer starting at the middle of the grid.
    One iteration is defined as one step in the program, i.e. the number of command characters evaluated. For example, given a program nessewnnnewwwsswse and an iteration count of 5, your interpreter should evaluate nesse before returning the final state of the data grid. Non-command characters should not count towards the number of iterations.
    Regarding iterations, the act of skipping to the matching ] when a [ is encountered (or vice versa) is considered to be one iteration regardless of the number of command characters in between. The next iteration then commences at the command right after the matching ] (or [).
    Your interpreter should terminate normally and return the final state of the 2D data grid whenever any of the mentioned conditions become true: (1) All commands have been considered left to right, or (2) Your interpreter has already performed the number of iterations specified in the second argument.
    The return value of your interpreter should be a representation of the final state of the 2D data grid where each row is separated from the next by a CRLF (\r\n). For example, if the final state of your datagrid is

[
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1]
]

... then your return string should be "100\r\n010\r\n001".

Good luck :D
*/


const interpreter = (code, iterations, width, height) => {
    // We need to make instructions iterable so we split it into an array
    const c       = code.split('');

    // We create a 2D matrix from given width and height, and initialize to "0" (string)
    const t       = Array.from({length: height}, () => Array.from({length: width}).fill('0'));

    // Make the max bounds of the matrix clear
    const boundsX = width - 1;
    const boundsY = height - 1; 

    // Keep track of the current matrix position
    let pos = [0, 0];

    // This flips the current matrix position
    const flip  = () => t[pos[0]][pos[1]] = t[pos[0]][pos[1]] === '0' ? '1' : '0';

    /*
     Move matrix position, then check if its in bounds...
     If position is out of bounds, change position to row/column start/end.
    */
    const up    = () => --pos[0] < 0       ? pos[0] = boundsY : pos[0];
    const down  = () => ++pos[0] > boundsY ? pos[0] = 0       : pos[0];
    const left  = () => --pos[1] < 0       ? pos[1] = boundsX : pos[1];
    const right = () => ++pos[1] > boundsX ? pos[1] = 0       : pos[1];

    // Return the matching closing bracket
    const getLoopClosePos = i => {
        let block = 0;
        for (; i < c.length; i++) {
        if (c[i] === ']') block--;
        if (c[i] === '[') block++;
        if (block === 0) return i;
        }
    }

    // Return the matching opening bracket
    const getLoopOpenPos = i => {
        let block = 0;
        for (;i > -1; i--) {
        if (c[i] === '[') block--;
        if (c[i] === ']') block++;
        if (block === 0) return i;
        }
    }

    /*
     Iterate through the instructions, break when through all iterations.
     Note there is a default to "continue;", which prevents invalid characters from costing an iteration.
    */
    for (let i = 0; i < c.length; i++) {
        if (iterations === 0) break;
            switch (c[i]) {
            case '*': flip(); break;
            case 'n': up(); break;
            case 'e': right(); break;
            case 's': down(); break;
            case 'w': left(); break;
            case '[': if (t[pos[0]][pos[1]] === '0') i = getLoopClosePos(i); break;
            case ']': if (t[pos[0]][pos[1]] !== '0') i = getLoopOpenPos(i); break;
            default: continue;
        }
        iterations--;
    }
    return t.map(a => a.join('')).join('\r\n');
}
  
// console.log('returned', interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 0, 6, 9));
// console.log("Expected: 000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000", "\nYour interpreter should initialize all cells in the datagrid to 0");

// console.log('returned:', interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 7, 6, 9)); 
// console.log("expected: 111100\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000", "Your interpreter should adhere to the number of iterations specified");

// console.log('returned:', interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 19, 6, 9));
// console.log('expected:', "111100\\r\\n000010\\r\\n000001\\r\\n000010\\r\\n000100\\r\\n000000\\r\\n000000\\r\\n000000\\r\\n000000", "Your interpreter should traverse the 2D datagrid correctly");

// console.log('returned:', interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 42, 6, 9));
// console.log("expected: 111100\\r\\n100010\\r\\n100001\\r\\n100010\\r\\n111100\\r\\n100000\\r\\n100000\\r\\n100000\\r\\n100000", "Your interpreter should traverse the 2D datagrid correctly for all of the \"n\", \"e\", \"s\" and \"w\" commands");

// console.log('returned', interpreter("*e*e*e*es*es*ws*ws*w*w*w*n*n*n*ssss*s*s*s*", 100, 6, 9)); 
// console.log('expected', "111100\\r\\n100010\\r\\n100001\\r\\n100010\\r\\n111100\\r\\n100000\\r\\n100000\\r\\n100000\\r\\n100000", "Your interpreter should terminate normally and return a representation of the final state of the 2D datagrid when all commands have been considered from left to right even if the number of iterations specified have not been fully performed");


console.log('returned', interpreter("*[es*]", 1000, 5, 6)); 
console.log('expected', '01111\\r\\n11111\\r\\n11111\\r\\n11111\\r\\n11111\\r\\n11111');