/*
https://www.codewars.com/kata/52bb6539a4cf1b12d90005b7/train/javascript

Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers, 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several "ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version of the game.

Before the game begins, players set up the board and place the ships accordingly to the following rules:

    There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). Any additional ships are not allowed, as well as missing ships.
    Each ship must be a straight line, except for submarines, which are just single cell.
    The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link.
*/

const validateBattlefield = field => {
  const isCorrectSize = (field) => field.length === 10 && !field.filter(r => r.length !== 10).length;
  
  if (!isCorrectSize(field)) return false;
  
  const ships = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4]
  const found = [];

  const checkDiags = ([x, y]) => {
    if (x < 2 || y < 2 || x > 8 || y > 8) return false;
    return !(
      field?.[x + 1]?.[y + 1] + 
      field?.[x + 1]?.[y - 1] +
      field?.[x - 1]?.[y + 1] +
      field?.[x - 1]?.[y + 1] === 0
    )
  }

  const getValidLength = ([x, y]) => {
    let count = 1;
    field[x][y] = 0;
    if (checkDiags([x, y])) return false;

    if (field?.[x + 1][y] === 1 && field[x]?.[y + 1] === 1) return false;
    if (field?.[x + 1][y] === 1) {
      while (field?.[x + 1][y] === 1) {
        if (
          field[x]?.[y + 1] === 1 || 
          field[x]?.[y - 1] === 1 ||
          checkDiags([x + 1, y])
        ) return false;
        count++;
        field[x + 1][y] = 0;
        x++;
      }
    } else if (field[x]?.[y + 1] === 1) {
      while (field[x]?.[y + 1] === 1) {
        if (
            field?.[x + 1][y] === 1 || 
            field?.[x - 1]?.[y] === 1 ||
            checkDiags([x, y + 1])
          ) return false;
        count++;
        field[x][y + 1] = 0;
        y++;
      }
    }
    return count;
  }

  for (let r = 0; r < field.length; r++) {
    for (let c = 0; c < field.length; c++) {
      if (field[r][c] === 1) found.push(getValidLength([r, c]));
    }
  }

  found.sort();

  const compareArrs = (a, b, i = a.length) => {
    while (i--) if (a[i] !== b[i]) return false;
    return true;
  }

  return compareArrs(ships, found);
}

console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]));


console.log(validateBattlefield([
  [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]));