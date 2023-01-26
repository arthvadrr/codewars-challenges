function maxNumberOfBalloons(text: string): number {
  let   count:number     = 0
  const balloon:string   = "balloon"
  const letters:Object = {}

  for (const letter of text) {
      if (balloon.includes(letter)) {
          if (!letters[letter]) letters[letter] = 0
          letters[letter]++
      }
  }

  while(
      letters["b"] >= 1 &&
      letters["a"] >= 1 &&
      letters["l"] >= 2 &&
      letters["o"] >= 2 &&
      letters["n"] >= 1
  ) {
      letters["b"] -= 1
      letters["a"] -= 1
      letters["l"] -= 2
      letters["o"] -= 2
      letters["n"] -= 1
      count++
  }

  return count
}