/*
https://www.codewars.com/kata/51e0007c1f9378fa810002a9/train/typescript

Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array

Invalid characters should be ignored.

parse("iiisdoso") => [8, 64]
*/

function parse (data: string): number[] {
  let result: Array<number> = []
  let dataArr: Array<string> = data.split('')
  let modNum: number = 0

  interface DataFunction {
    "i": Function,
    "d": Function,
    "s": Function,
    "o": Function
   }

  let parser: DataFunction = {
    "i": (x:number): number => ++x,
    "d": (x:number): number => --x,
    "s": (x:number): number => x*x,
    "o": (x:number): any => result.push(x)
   }

  for (const data of dataArr) {
    if (parser[data as keyof DataFunction]) {
      if (data === 'o') parser[data as keyof DataFunction](modNum)
      else modNum = parser[data as keyof DataFunction](modNum)
    }
  }

  return result
}

console.log(parse("iiisdoso"))
console.log(parse("iiisxxxdoso"))