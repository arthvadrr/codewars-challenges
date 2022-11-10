/*
https://www.codewars.com/kata/5a93754d0025e98fde000048/train/javascript

In the test cases, it displayed like this:

The goal of the game is: move the initial color blocks, let each empty block became to color block.
Moving Rules

    Each color block MUST/ONLY move once. The block should move at least one grid, otherwise, it is not a valid movement.
    You need to specify the direction of the movement for each color block, the direction can be Left, Right, Up and Down.
    The color block begins to move in the direction you specify, and each empty block on the path will turn into color. If an obstacle(border or another color block) is encountered, the moving direction will turn right 90 degrees, and the block will stop moving if there is still an obstacle after the turn.

For the gameMap above, we can let the purple block moving down:

Then, let the green block moving up:

In Python, the solution will be displayed in the console like this:

+----+
|aAbb|  # First colered block is designated 'A'
|aabb|
|aabb|
|aaBb|  # Second colored block is designated 'B', etc.
+----+

Ok, now all the blocks are colored. You win ;-)

So easy, right? ;-) Please write a nice solution to solve this kata. I'm waiting for you, code warrior ^_^
Output

Your output should be a 2D array, each subarray should contains 3 elements: [rowIndex, columnIndex, diretion]. rowIndex and columnIndex are 0-based, diretion should be one of "Left", "Right", "Up" and "Down".

For the gameMap above, the output should be [[0,1,"Down"],[3,2,"Up"]].

Not all test cases have a solution, if there is no solution, please return a boolean value false.
Examples and Note

You can submit the example solution(preloaded in the initial code) to see how it works ;-)

You also can play this game on the Web, here is the game link.
Play Games series:

    Play Tetris : Shape anastomosis
    Play FlappyBird : Advance Bravely
    Play PingPong : Precise control
    Play PacMan : Devour all
    Play PacMan 2: The way home
    Ins and Outs
    Three Dots
*/

var ii=0
function playFlou(gameMap){
  //Coding like playing game
  var exampleSolution=[
  [[0,0,"Right"]],  //an example solution for basic test-1
  [[0,0,"Right"],[3,3,"Left"]],  //an example solution for basic test-2
  [[0,1,"Down"],[3,2,"Up"]],  //an example solution for basic test-3
  [[0,1,"Down"],[0,2,"Right"]],  //an example solution for basic test-4
  [[1,0,"Right"],[0,0,"Right"]]  //an example solution for basic test-5
  ]
  return exampleSolution[ii++]||"If you've understood the rule, please write your own solution"
}