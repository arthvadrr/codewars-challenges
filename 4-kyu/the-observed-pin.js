/*
https://www.codewars.com/kata/5263c6999e0f40dee200059d/train/javascript

Alright, detective, one of our colleagues successfully observed our target person, Robby the robber. We followed him to a secret warehouse, where we assume to find all the stolen stuff. The door to this warehouse is secured by an electronic combination lock. Unfortunately our spy isn't sure about the PIN he saw, when Robby entered it.

The keypad has the following layout:

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘

He noted the PIN 1357, but he also said, it is possible that each of the digits he saw could actually be another adjacent digit (horizontally or vertically, but not diagonally). E.g. instead of the 1 it could also be the 2 or 4. And instead of the 5 it could also be the 2, 4, 6 or 8.

He also mentioned, he knows this kind of locks. You can enter an unlimited amount of wrong PINs, they never finally lock the system or sound the alarm. That's why we can try out all possible (*) variations.

* possible in sense of: the observed PIN itself and all variations considering the adjacent digits

Can you help us to find all those variations? It would be nice to have a function, that returns an array (or a list in Java/Kotlin and C#) of all variations for an observed PIN with a length of 1 to 8 digits. We could name the function getPINs (get_pins in python, GetPINs in C#). But please note that all PINs, the observed one and also the results, must be strings, because of potentially leading '0's. We already prepared some test cases for you.

Detective, we are counting on you!
*/

const getPINs = observed => {
  const res = [];
  const observedArr = observed.split('');
  const observedMatrix = Array.from({length: observed.length}, () => []);

  const keypad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    [0, "0", 0]
  ];

  const getPos = str => {
    for (let a = 0; a < keypad.length; a++) {
      for (let b = 0; b < keypad[a].length; b++) {
        if (str === keypad[a][b]) return [a, b];
      }
    }
  }

  const getVal = ([x, y]) => keypad?.[x]?.[y]
  const up     = ([x, y]) => [x - 1, y];
  const down   = ([x, y]) => [x + 1, y];
  const left   = ([x, y]) => [x, y - 1];
  const right  = ([x, y]) => [x, y + 1];
  const deltas = [up, down, left, right];

  for (let a = 0; a < observedArr.length; a++) {
    let pos = getPos(observedArr[a]);
    observedMatrix[a].push(getVal(pos));
    
    for (let f of deltas) {
      let adj = f(pos);
      let val = getVal(adj);
      
      if (val) observedMatrix[a].push(val)
    }
  }

  console.log(observedMatrix)

  let code = [];
  const lens = [];
  observedMatrix.forEach(a => lens.push(a.length - 1));
  const engine = Array.from(lens);
  
  console.log(Math.max(...engine));
  
  while (Math.max(...engine)) {
    const i = lens.length - 1;
    let shift = 0;
    
    //this works dont fuking touch it
    while(engine[i] > -1) {
      console.log(engine);
      engine[i]--;
    }

    while (engine[i - shift] === 0) {
      shift++;
    }
    
    engine[i - shift] -= 1;
    shift--;

    while (shift > 0) {
      engine[i - shift] = lens[i - shift]
      shift--;
    }
  }

  return res;
}

let expectations = {
  "8": ["5", "7", "8", "9", "0"],
  "11": ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
  "369": ["339","366","399","658","636","258","268","669","668","266","369","398","256","296","259","368","638","396","238","356","659","639","666","359","336","299","338","696","269","358","656","698","699","298","236","239"]
};

console.log(`
${getPINs("135")}
Expectations: ${expectations}
`);