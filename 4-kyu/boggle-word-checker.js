/*
https://www.codewars.com/kata/57680d0128ed87c94f000bfd

Write a function that determines whether a string is a valid guess in a Boggle board, as per the rules of Boggle. A Boggle board is a 2D array of individual characters, e.g.:

[ ["I","L","A","W"],
  ["B","N","G","E"],
  ["I","U","A","O"],
  ["A","S","R","L"] ]

Valid guesses are strings which can be formed by connecting adjacent cells (horizontally, vertically, or diagonally) without re-using any previously used cells.

For example, in the above board "BINGO", "LINGO", and "ILNBIA" would all be valid guesses, while "BUNGIE", "BINS", and "SINUS" would not.

Your function should take two arguments (a 2D array and a string) and return true or false depending on whether the string is found in the array as per Boggle rules.

Test cases will provide various array and string sizes (squared arrays up to 150x150 and strings up to 150 uppercase letters). You do not have to check whether the string is a real word or not, only if it's a valid guess.

*/

/*
Will need to refactor so that addNextPath saves all possible paths, and
then iterates through them;
*/

const checkWord = (board, word) => {
  let path          = [];
  const xBounds     = board[0].length - 1;
  const yBounds     = board.length - 1;
  const wordArr     = word.split('');
  const firstLetter = wordArr[0];
  const pointMatrix = [[]];
  const move        = (dir, from)       => dir(from);
  const right       = ([x, y])    => [x + 1, y];
  const down        = ([x, y])    => [x, y + 1];
  const left        = ([x, y])    => [x - 1, y];
  const up          = ([x, y])    => [x, y - 1];
  const rightDown   = ([x, y])    => [x + 1, y + 1];
  const leftDown    = ([x, y])    => [x - 1, y + 1];
  const upLeft      = ([x, y])    => [x - 1, y - 1];
  const upRight     = ([x, y])    => [x + 1, y - 1];
  const isInBounds = ([x, y]) => x >= 0 && x <= xBounds && y >= 0 && y <= yBounds;
  
  const dirArr  = [right, rightDown, down, leftDown, left, upLeft, up, upRight];

  const findStartingPoints = () => {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        let pos = board[r][c];
        if (firstLetter === pos) pointMatrix[0].push([r, c]); 
      }
    }
  }
  
  const findNextPositions = (pos, letter) => {
    let next = [];
    for (let d = 0; d < dirArr.length; d++) {
      let p = move(dirArr[d], pos);
      if (!isInBounds(p)) continue;
      if (board[p[0]][p[1]] === letter) next.push(p);
    }
    return next;
  }

  const posExists = (arr, origin) => {
    let exists = false;
    origin.forEach(i => {
      if (i[0] === arr[0] && i[1] === arr[1]) exists = true;
    })
    return exists;
  }

  console.table(board);
  const getNextLetterArr = () => {
    for (let l = 1; l < wordArr.length; l++) {
      let letterArr = [];

      if (pointMatrix[l - 1]) {
        for (let p = 0; p < pointMatrix[l - 1].length; p++) {
          let posArr = findNextPositions(pointMatrix[l - 1][p], wordArr[l])
          posArr.forEach(i => {
            if (!posExists(i, letterArr)) letterArr.push(i)
          });
        }
      }
      if (letterArr.length) {
        pointMatrix.push(letterArr);
      }
    }
  }

  const isWithinRange = (pos1, pos2) => {
    if (!isInBounds(pos1) || !isInBounds(pos2)) return false;
    const rangeX = [pos1[0] - 1, pos1[0], pos1[0] + 1];
    const rangeY = [pos1[1] - 1, pos1[1], pos1[1] + 1];

    if (rangeX.includes(pos2[0]) && rangeY.includes(pos2[1])) return true;
    return false;
  }

  const isCollision = (path, pos) => path.includes(pos);

  const canDrawPath = () => {
    const letters = word.split('').reverse();
    const paths = pointMatrix.reverse();
    let path = [paths[0][0]];

    for (let l = 1; l < letters.length; l++) {
      for (let p = 0; p < paths[l].length; p++) {
        let current = paths[l][p];
        let previous = path[path.length - 1];
        if (isWithinRange(previous, current) && 
        !isCollision(previous, current)) path.push(current);
      }
    }
    if (path.length === letters.length) return true;
    return false;
  }
  
  findStartingPoints();
  if (wordArr.length === 0 && pointMatrix.length > 0) return true;
  getNextLetterArr();
  if (pointMatrix.length !== word.split('').length) return false;
  console.log(word);
  console.log(canDrawPath());
  return canDrawPath();
}

const testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

checkWord( testBoard, "C" ) 
checkWord( testBoard, "EAR" ) 
checkWord( testBoard, "EARS" )
checkWord( testBoard, "BAILER" )
checkWord( testBoard, "fkkk"); 
checkWord( testBoard, "RSCAREIOYBAILNEA" )
checkWord( testBoard, "CEREAL" )
checkWord( testBoard, "ROBES" )
checkWord( testBoard, "BAKER" )
checkWord( testBoard, "CARS" )