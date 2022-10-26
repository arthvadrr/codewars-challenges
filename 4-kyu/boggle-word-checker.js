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
  const startPoints = [];
  const move        = (dir)       => path.push(dir(path[path.length - 1]));
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

  const findStartingPoints = (board) => {
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        let pos = board[r][c];
        if (firstLetter === pos) startPoints.push([r, c]); 
      }
    }
    wordArr.shift();
  }

  const addNextPath = (currentLetter) => {
    for (let d = 0; d < dirArr.length; d++) {
      move(dirArr[d]);
      let p = path[path.length - 1];

      if (isInBounds(p) && currentLetter === board[p[0]][p[1]]) {
        return true;
      }

      path.pop();
    }
    return false;
  }

  const iterateThroughLetters = () => {
    for (let l = 0; l < wordArr.length; l++) {
      while(addNextPath(wordArr[l])) {
        if (path.length === wordArr.length + 1) return true;
      }
    }
    return false;
  }

  const iterateThroughStartingPoints = () => {
    for (let s = 0; s < startPoints.length; s++) {
      path = [startPoints[s]];
      if (iterateThroughLetters()) {
        return true;
      }
    }
    return false;
  }

  findStartingPoints(board);

  if (startPoints.length > 0 && wordArr.length === 0) return true;

  return iterateThroughStartingPoints();
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
checkWord( testBoard, "RSCAREIOYBAILNEA" )
checkWord( testBoard, "CEREAL" )
checkWord( testBoard, "ROBES" )
checkWord( testBoard, "BAKER" )
checkWord( testBoard, "CARS" )