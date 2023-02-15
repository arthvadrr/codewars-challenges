/*
https://www.codewars.com/kata/58e24788e24ddee28e000053
*/

const simple_assembler = program => {
    const result    = {}
    const num_regex = /[0-9]/
    let pos         = 0
    
      const funcs = {
      "mov": (x, value) => {
        const is_num = value.match(num_regex)?.length
        if (is_num) result[x] = Number(value)
        else result[x] = result[value]
      },
      "inc": x => result[x]++,
      "dec": x => result[x]--
    }
    
    const process = instruction => {
      const str      = instruction.split(' ')
      const exec     = str[0]
      const register = str[1]
      const value    = str[2]
      
      if (exec === 'jnz') {
        if (result[register] !== 0) {
          pos -= 1
          pos += Number(value)
        } return
      }
      
      funcs[exec](register, value)
    }
    
    for (;pos < program.length; pos++) process(program[pos])
    
    return result
  }