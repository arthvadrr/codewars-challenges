/*
https://www.codewars.com/kata/52223df9e8f98c7aa7000062/train/go

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

65-90
97-122
*/

package kata

func GetSlicePos(char int, ascii []int) int {
  for i := 0; i < len(ascii); i++ {
    if char == ascii[i] {
      return i
    }
  }
  return -1
}

func RotatePos(pos int, ascii []int) int {
  rot := 13

  for ;rot > 0; rot-- {
    pos++

    if pos > len(ascii) - 1 {
      pos = 0
    }
    
  }

  return pos
}

func Rot13(msg string) string {
  var result string = ""
  uppers := []int{}
  lowers := []int{}

  for i := 65; i <= 90; i++ {
    uppers = append(uppers, i)
  }

  for i := 97; i <= 122; i++ {
    lowers = append(lowers, i)
  }

  for i := 0; i < len(msg); i++ {
    ascii := int(msg[i])
    char := string(msg[i])

    if ascii >= 65 && ascii <= 90 {
      char = string(rune(uppers[RotatePos(GetSlicePos(ascii, uppers), uppers)]))
    } else if ascii >= 97 && ascii <= 122 {
      char = string(rune(lowers[RotatePos(GetSlicePos(ascii, lowers), lowers)]))
    }

    result += char
  }

  return result
}