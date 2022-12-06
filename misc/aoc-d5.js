/* AOC Day 5 part 1 https://adventofcode.com/2022/day/5 */
const getTopBlocks = (cargo, instructions) => {
  const buildArrFromCargo = cargo => {
    const cargoStr = cargo.split('');
    const cargoLines = [];
    let counter = 1;
    let rowPos = 0;

    for (let i = 0; i < cargoStr.length; i++) {
      if (counter > 4) {
        rowPos++;
        counter = 1;
      }

      switch (cargoStr[i]) {
        case " " : break;
        case "[" : break;
        case "]" : break;
        case "\n": rowPos = 0; counter = 1; break;
        default: { // This is a letter...could be written more explicitly
          if (!cargoLines[rowPos]) cargoLines[rowPos] = []; // if there isn't a row, create it
          cargoLines[rowPos].push(cargoStr[i]);
        }
      }
      counter++;
    }

    // filter is a hack fix for an unsolved behavior of more arrays being created than needed
    return cargoLines.filter(arr => arr.length > 0).map(arr => arr.reverse());
  }
  
  const buildArrFromInstructions = instructions => {
    const arr = instructions.split('\n').map(s => {
      s = s.replace("move ", '');
      s = s.replace("from ", ',');
      s = s.replace("to ", ',');
      return s.split(',').map(s => parseInt(s));
    })
    return arr;
  }

  const crane = () => {
    const c_arr = buildArrFromCargo(cargo);
    const i_arr = buildArrFromInstructions(instructions)

    const moveBlock = (amount, from, to) => {
      for (let i = 0; i < amount; i++) c_arr[to].push(c_arr[from].pop());
    }

    // Call moveBlock for each instruction set
    for (const arr of i_arr) {
      moveBlock(arr[0], arr[1] - 1, arr[2] - 1);
    }

    return c_arr;
  }

  // get last block and return
  return crane().map(arr => arr[arr.length - 1]);
}

console.table(getTopBlocks(`[D]                     [N] [F]    
[H] [F]             [L] [J] [H]    
[R] [H]             [F] [V] [G] [H]
[Z] [Q]         [Z] [W] [L] [J] [B]
[S] [W] [H]     [B] [H] [D] [C] [M]
[P] [R] [S] [G] [J] [J] [W] [Z] [V]
[W] [B] [V] [F] [G] [T] [T] [T] [P]
[Q] [V] [C] [H] [P] [Q] [Z] [D] [W]`,
   `move 1 from 3 to 9
   move 2 from 2 to 1
   move 3 from 5 to 4
   move 1 from 1 to 8
   move 1 from 3 to 9
   move 1 from 5 to 7
   move 1 from 5 to 3
   move 4 from 4 to 2
   move 2 from 3 to 4
   move 1 from 3 to 2
   move 6 from 1 to 5
   move 1 from 4 to 3
   move 1 from 3 to 9
   move 4 from 2 to 4
   move 4 from 8 to 7
   move 3 from 2 to 6
   move 1 from 2 to 7
   move 5 from 5 to 6
   move 1 from 5 to 8
   move 5 from 8 to 7
   move 7 from 4 to 6
   move 15 from 6 to 4
   move 1 from 8 to 7
   move 1 from 1 to 5
   move 1 from 2 to 4
   move 2 from 4 to 8
   move 1 from 5 to 2
   move 5 from 6 to 4
   move 2 from 2 to 1
   move 1 from 9 to 4
   move 1 from 6 to 9
   move 3 from 9 to 3
   move 3 from 4 to 3
   move 1 from 6 to 1
   move 5 from 3 to 4
   move 2 from 8 to 5
   move 1 from 3 to 6
   move 1 from 6 to 2
   move 1 from 2 to 8
   move 6 from 4 to 2
   move 1 from 2 to 7
   move 1 from 5 to 3
   move 4 from 9 to 3
   move 1 from 9 to 1
   move 3 from 1 to 6
   move 1 from 9 to 7
   move 14 from 7 to 6
   move 1 from 8 to 3
   move 4 from 2 to 6
   move 3 from 3 to 8
   move 9 from 4 to 9
   move 1 from 1 to 5
   move 2 from 5 to 8
   move 3 from 8 to 2
   move 4 from 2 to 6
   move 1 from 3 to 9
   move 10 from 6 to 1
   move 5 from 9 to 8
   move 1 from 9 to 3
   move 6 from 1 to 8
   move 3 from 7 to 4
   move 2 from 4 to 5
   move 2 from 9 to 8
   move 15 from 8 to 3
   move 3 from 7 to 9
   move 8 from 4 to 3
   move 2 from 5 to 9
   move 6 from 6 to 5
   move 6 from 5 to 8
   move 1 from 7 to 8
   move 6 from 9 to 2
   move 5 from 2 to 4
   move 6 from 3 to 5
   move 5 from 5 to 8
   move 1 from 5 to 7
   move 1 from 9 to 7
   move 2 from 6 to 4
   move 12 from 8 to 2
   move 7 from 2 to 4
   move 3 from 7 to 5
   move 3 from 5 to 7
   move 3 from 7 to 9
   move 2 from 9 to 7
   move 1 from 9 to 3
   move 2 from 7 to 4
   move 3 from 1 to 9
   move 4 from 6 to 5
   move 6 from 2 to 8
   move 14 from 4 to 9
   move 7 from 9 to 6
   move 9 from 9 to 2
   move 1 from 5 to 8
   move 5 from 6 to 3
   move 3 from 1 to 9
   move 3 from 8 to 9
   move 1 from 8 to 3
   move 5 from 2 to 5
   move 1 from 4 to 9
   move 2 from 6 to 1
   move 2 from 3 to 6
   move 3 from 8 to 3
   move 2 from 6 to 3
   move 1 from 4 to 9
   move 4 from 3 to 6
   move 7 from 6 to 9
   move 10 from 9 to 2
   move 10 from 3 to 2
   move 7 from 2 to 8
   move 2 from 1 to 7
   move 13 from 3 to 7
   move 7 from 5 to 1
   move 1 from 9 to 6
   move 4 from 8 to 4
   move 2 from 3 to 2
   move 4 from 4 to 6
   move 1 from 3 to 4
   move 5 from 6 to 5
   move 3 from 5 to 7
   move 12 from 2 to 5
   move 7 from 5 to 6
   move 2 from 8 to 3
   move 7 from 6 to 2
   move 3 from 9 to 6
   move 1 from 6 to 7
   move 1 from 4 to 9
   move 2 from 7 to 6
   move 13 from 7 to 4
   move 3 from 7 to 5
   move 1 from 9 to 6
   move 12 from 4 to 3
   move 1 from 8 to 1
   move 2 from 6 to 4
   move 1 from 7 to 9
   move 2 from 9 to 8
   move 12 from 3 to 5
   move 1 from 8 to 2
   move 15 from 5 to 6
   move 2 from 4 to 6
   move 1 from 9 to 6
   move 5 from 5 to 4
   move 4 from 4 to 2
   move 2 from 1 to 5
   move 4 from 1 to 5
   move 1 from 8 to 6
   move 7 from 5 to 2
   move 22 from 2 to 3
   move 9 from 6 to 3
   move 1 from 1 to 8
   move 1 from 8 to 7
   move 23 from 3 to 6
   move 2 from 2 to 4
   move 1 from 7 to 8
   move 1 from 8 to 2
   move 19 from 6 to 9
   move 2 from 2 to 4
   move 4 from 4 to 6
   move 13 from 6 to 8
   move 12 from 9 to 1
   move 2 from 5 to 9
   move 2 from 4 to 8
   move 1 from 2 to 7
   move 1 from 7 to 1
   move 4 from 6 to 2
   move 10 from 1 to 9
   move 1 from 6 to 7
   move 11 from 8 to 2
   move 6 from 3 to 6
   move 1 from 7 to 2
   move 1 from 1 to 8
   move 2 from 6 to 7
   move 7 from 6 to 3
   move 9 from 3 to 1
   move 7 from 9 to 6
   move 1 from 8 to 7
   move 4 from 2 to 6
   move 1 from 8 to 3
   move 6 from 6 to 5
   move 9 from 9 to 3
   move 5 from 6 to 1
   move 1 from 7 to 8
   move 2 from 8 to 4
   move 1 from 4 to 2
   move 1 from 4 to 5
   move 2 from 5 to 6
   move 1 from 6 to 9
   move 9 from 1 to 4
   move 4 from 4 to 6
   move 2 from 4 to 7
   move 7 from 2 to 8
   move 5 from 6 to 7
   move 6 from 3 to 8
   move 8 from 1 to 9
   move 3 from 5 to 2
   move 2 from 3 to 9
   move 3 from 9 to 4
   move 7 from 2 to 3
   move 1 from 7 to 2
   move 10 from 3 to 2
   move 6 from 9 to 4
   move 1 from 3 to 1
   move 1 from 1 to 8
   move 4 from 8 to 5
   move 10 from 8 to 4
   move 2 from 8 to 9
   move 7 from 4 to 9
   move 6 from 2 to 6
   move 3 from 6 to 5
   move 4 from 4 to 9
   move 8 from 7 to 5
   move 1 from 9 to 2
   move 7 from 2 to 1
   move 4 from 9 to 8
   move 2 from 6 to 3
   move 2 from 3 to 2
   move 13 from 5 to 7
   move 5 from 4 to 9
   move 5 from 1 to 7
   move 3 from 5 to 8
   move 17 from 7 to 2
   move 15 from 2 to 6
   move 15 from 9 to 5
   move 1 from 9 to 5
   move 4 from 8 to 6
   move 1 from 4 to 6
   move 5 from 4 to 7
   move 5 from 2 to 7
   move 18 from 6 to 2
   move 2 from 7 to 6
   move 10 from 2 to 8
   move 2 from 2 to 3
   move 11 from 8 to 7
   move 7 from 7 to 5
   move 9 from 7 to 5
   move 3 from 7 to 5
   move 2 from 1 to 7
   move 4 from 2 to 1
   move 30 from 5 to 1
   move 1 from 3 to 1
   move 35 from 1 to 9
   move 2 from 2 to 5
   move 2 from 8 to 3
   move 20 from 9 to 2
   move 3 from 7 to 9
   move 1 from 3 to 6
   move 5 from 5 to 3
   move 18 from 2 to 5
   move 4 from 5 to 8
   move 7 from 9 to 7
   move 1 from 6 to 2
   move 3 from 8 to 5
   move 6 from 3 to 5
   move 3 from 7 to 4
   move 2 from 2 to 3
   move 1 from 4 to 5
   move 2 from 4 to 5
   move 4 from 7 to 2
   move 26 from 5 to 6
   move 2 from 2 to 7
   move 1 from 2 to 9
   move 1 from 7 to 8
   move 1 from 5 to 3
   move 2 from 8 to 3
   move 11 from 9 to 3
   move 6 from 3 to 4
   move 27 from 6 to 4
   move 33 from 4 to 3
   move 4 from 6 to 8
   move 1 from 2 to 8
   move 1 from 7 to 3
   move 4 from 8 to 9
   move 1 from 8 to 6
   move 34 from 3 to 8
   move 1 from 8 to 5
   move 1 from 2 to 9
   move 8 from 3 to 9
   move 3 from 5 to 4
   move 1 from 6 to 5
   move 27 from 8 to 9
   move 1 from 3 to 4
   move 1 from 5 to 7
   move 3 from 8 to 1
   move 11 from 9 to 1
   move 1 from 7 to 5
   move 11 from 9 to 3
   move 1 from 5 to 1
   move 1 from 8 to 7
   move 2 from 9 to 2
   move 1 from 2 to 1
   move 1 from 2 to 7
   move 2 from 8 to 2
   move 6 from 3 to 8
   move 1 from 4 to 2
   move 7 from 1 to 2
   move 1 from 7 to 1
   move 19 from 9 to 1
   move 3 from 2 to 9
   move 10 from 1 to 4
   move 2 from 9 to 1
   move 1 from 7 to 9
   move 7 from 1 to 6
   move 10 from 4 to 3
   move 14 from 1 to 7
   move 2 from 9 to 1
   move 3 from 4 to 6
   move 9 from 7 to 6
   move 1 from 3 to 5
   move 4 from 8 to 5
   move 10 from 6 to 8
   move 3 from 5 to 6
   move 10 from 3 to 4
   move 4 from 3 to 7
   move 1 from 5 to 9
   move 2 from 7 to 9
   move 1 from 1 to 9
   move 6 from 2 to 4
   move 1 from 5 to 3
   move 11 from 4 to 9
   move 3 from 4 to 9
   move 1 from 2 to 7
   move 2 from 3 to 5
   move 1 from 3 to 2
   move 7 from 7 to 2
   move 2 from 5 to 8
   move 8 from 2 to 1
   move 2 from 6 to 8
   move 9 from 6 to 8
   move 3 from 8 to 2
   move 3 from 2 to 6
   move 9 from 9 to 5
   move 3 from 5 to 8
   move 5 from 9 to 4
   move 3 from 6 to 4
   move 1 from 6 to 3
   move 3 from 1 to 6
   move 3 from 6 to 9
   move 17 from 8 to 5
   move 12 from 5 to 4
   move 21 from 4 to 3
   move 1 from 4 to 9
   move 7 from 5 to 4
   move 22 from 3 to 7
   move 3 from 1 to 8
   move 3 from 9 to 1
   move 4 from 4 to 6
   move 1 from 6 to 2
   move 3 from 4 to 1
   move 1 from 6 to 7
   move 4 from 9 to 3
   move 2 from 5 to 7
   move 1 from 9 to 6
   move 2 from 6 to 9
   move 8 from 7 to 9
   move 1 from 6 to 2
   move 1 from 9 to 3
   move 4 from 3 to 4
   move 14 from 7 to 4
   move 1 from 3 to 2
   move 3 from 7 to 8
   move 12 from 8 to 9
   move 8 from 4 to 1
   move 1 from 7 to 4
   move 2 from 5 to 1
   move 3 from 2 to 9
   move 17 from 9 to 3
   move 6 from 9 to 1
   move 1 from 9 to 2
   move 13 from 3 to 9
   move 4 from 3 to 1
   move 3 from 9 to 1
   move 22 from 1 to 9
   move 1 from 8 to 1
   move 6 from 9 to 5
   move 4 from 1 to 9
   move 3 from 1 to 9
   move 4 from 4 to 8
   move 4 from 4 to 2
   move 1 from 4 to 3
   move 3 from 8 to 9
   move 1 from 3 to 4
   move 1 from 1 to 3
   move 1 from 8 to 2
   move 1 from 5 to 8
   move 4 from 2 to 1
   move 1 from 8 to 7
   move 10 from 9 to 6
   move 1 from 7 to 9
   move 1 from 2 to 3
   move 1 from 6 to 1
   move 3 from 5 to 7
   move 1 from 8 to 7
   move 1 from 6 to 1
   move 1 from 2 to 4
   move 1 from 5 to 2
   move 19 from 9 to 2
   move 1 from 4 to 7
   move 1 from 3 to 7
   move 3 from 7 to 9
   move 4 from 1 to 2
   move 10 from 9 to 4
   move 1 from 5 to 8
   move 3 from 6 to 4
   move 1 from 3 to 4
   move 10 from 2 to 8
   move 12 from 2 to 5
   move 3 from 5 to 9
   move 5 from 6 to 5
   move 5 from 1 to 4
   move 22 from 4 to 3
   move 3 from 8 to 7
   move 1 from 7 to 2
   move 3 from 2 to 9
   move 19 from 3 to 5
   move 2 from 7 to 8
   move 7 from 5 to 6
   move 5 from 9 to 6
   move 1 from 9 to 3
   move 16 from 5 to 1
   move 2 from 3 to 1
   move 3 from 7 to 3
   move 7 from 8 to 4
   move 2 from 8 to 1
   move 5 from 5 to 9
   move 1 from 5 to 2
   move 1 from 2 to 3
   move 1 from 8 to 5
   move 4 from 5 to 7
   move 2 from 3 to 8
   move 2 from 1 to 5
   move 4 from 7 to 6
   move 6 from 4 to 7
   move 4 from 9 to 8
   move 14 from 6 to 7
   move 8 from 1 to 7
   move 7 from 1 to 3
   move 3 from 5 to 9
   move 28 from 7 to 5
   move 1 from 1 to 8
   move 4 from 8 to 3
   move 9 from 3 to 1
   move 1 from 9 to 5
   move 6 from 3 to 2
   move 10 from 1 to 6
   move 1 from 1 to 9
   move 5 from 9 to 7
   move 14 from 5 to 3
   move 1 from 4 to 1
   move 1 from 7 to 2
   move 1 from 7 to 1
   move 1 from 1 to 7
   move 3 from 8 to 5
   move 4 from 6 to 3
   move 3 from 7 to 2
   move 15 from 3 to 6
   move 16 from 5 to 7
   move 4 from 2 to 8
   move 1 from 3 to 1
   move 5 from 7 to 3
   move 12 from 6 to 4
   move 4 from 8 to 5
   move 1 from 4 to 2
   move 2 from 5 to 3
   move 8 from 6 to 3
   move 7 from 4 to 5
   move 9 from 7 to 6
   move 1 from 7 to 9
   move 1 from 1 to 9
   move 1 from 1 to 9
   move 5 from 2 to 8
   move 5 from 8 to 2
   move 11 from 5 to 9
   move 1 from 4 to 2
   move 4 from 9 to 6
   move 12 from 3 to 7
   move 3 from 4 to 9
   move 14 from 6 to 2
   move 2 from 2 to 4
   move 2 from 3 to 5
   move 10 from 7 to 2
   move 1 from 4 to 8
   move 1 from 2 to 7
   move 28 from 2 to 9
   move 4 from 7 to 5
   move 1 from 2 to 4
   move 6 from 5 to 1
   move 2 from 4 to 3
   move 1 from 8 to 1
   move 40 from 9 to 1
   move 10 from 1 to 6
   move 5 from 3 to 5
   move 1 from 9 to 8
   move 3 from 6 to 7
   move 11 from 1 to 2
   move 9 from 2 to 3
   move 3 from 5 to 1
   move 4 from 7 to 1
   move 2 from 2 to 4
   move 2 from 5 to 8
   move 19 from 1 to 7
   move 8 from 3 to 2
   move 14 from 1 to 8
   move 14 from 7 to 1
   move 4 from 6 to 5
   move 1 from 1 to 9`
));