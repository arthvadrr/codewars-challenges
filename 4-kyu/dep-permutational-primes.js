const permutational_primes = (
  $arg__upper_limit, 
  $arg__number_of_prime_permutations
) => {

/* 
  Subroutines
  These subroutines build on previous subroutines, so order matters
*/
  
const is_prime = number => {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false
    }
    return true
  } else return false
}

const get_primes = number => {
  const prime_array = []
  
  for (let i = 2; i <= number; i++) {
    if (is_prime(i)) prime_array.push(i)
  }

  return prime_array
}

const get_number_permutations = number => {
  const result_arr = []
  const num_string = number.toString()
  //const num_arr    = num_string.split('')
  let max, count

  switch (num_string.length) {
    case 1: {
      max   = 9
      count = 0
      break;
    }
    case 2: {
      max   = 99
      count = 10
      break;
    }
    case 3: {
      max   = 999
      count = 100
      break;
    }
    case 4: {
      max   = 9999
      count = 1000
      break;
    }
  }

  while (count <= max) {
    let temp_number_arr = Array.from(num_arr)
    const count_arr     = count.toString().split('')
    
    count_arr.forEach(num_string => {
      const index =  temp_number_arr.indexOf(num_string)
      if (index !== -1) temp_number_arr.splice(index, 1)
    })

    if (temp_number_arr.length === 0) result_arr.push(count)
    count++
  }

  return result_arr
}

const get_primes_from_array = (array, max = -1) => {
  const result_arr = []

  array.forEach(number => {
    if (
      is_prime(number) &&
      (max === -1 || number <= max) 
    ) result_arr.push(number)
  })

  return result_arr
}

const has_required_amount_of_prime_permutations = prime => {
  const perms = get_number_permutations(prime)
  const primes_from_perms = get_primes_from_array(perms, $arg__upper_limit)

  if (primes_from_perms.length === $arg__number_of_prime_permutations + 1) return primes_from_perms
  return false
}

const recursively_reduce_primes_with_correct_amount_of_prime_permutations = (primes) => {
  if (primes.length > 0) {
    const prime = primes.shift()
    const prime_perms = has_required_amount_of_prime_permutations(prime)
    if (prime_perms) {
      result.primes_with_required_number_of_prime_permutations.push(prime)
      prime_perms.forEach(perm => {
        const index = primes.indexOf(perm)
        if (index !== -1) primes.splice(index, 1)
      })
    }
    recursively_reduce_primes_with_correct_amount_of_prime_permutations(primes)
  }
}

/* 
  Logic
  Do the thing 
*/

const result = {
  primes_with_required_number_of_prime_permutations : [],
  smallest_prime        : 0,
  largest_prime         : 0
}

const primes = get_primes($arg__upper_limit)
recursively_reduce_primes_with_correct_amount_of_prime_permutations(primes)
result.primes_with_required_number_of_prime_permutations.sort((a, b) => a - b)
result.smallest_prime = result.primes_with_required_number_of_prime_permutations[0] || 0
result.largest_prime  = result.primes_with_required_number_of_prime_permutations[result.primes_with_required_number_of_prime_permutations.length - 1] || 0

return [
  result.primes_with_required_number_of_prime_permutations.length,
  result.smallest_prime,
  result.largest_prime
]
}


console.time('perms')
console.log(permutational_primes(1000, 1))
console.log(permutational_primes(1000, 2))
console.log(permutational_primes(1000, 3))
console.log(permutational_primes(1000, 4))
console.log(permutational_primes(1000, 5))
console.log(permutational_primes(2000, 1))
console.log(permutational_primes(2000, 2))
console.log(permutational_primes(2000, 3))
console.log(permutational_primes(2000, 4))
console.log(permutational_primes(2000, 5))
console.log(permutational_primes(3000, 1))
console.timeEnd('perms')







































/* 2.0 */

const permutational_primes_2 = (
  $arg__upper_limit, 
  $arg__number_of_prime_permutations
) => {

/* 
  Subroutines
  These subroutines build on previous subroutines, so order matters
*/
  
const is_prime = number => {
  if (number > 3) {
    for (let i = 3; i < number; i++) {
      if (number % i === 0) return false
    }
    return true
  } else return false
}

const get_primes = number => {
  const prime_array = []
  
  for (let i = 3; i <= number; i++) {
    if (is_prime(i)) prime_array.push(i)
  }

  return prime_array
}

const get_permutations = num_arr => {
  let result_arr = []

  if (num_arr.length === 1) return [num_arr]

  for (let a = 0; a < num_arr.length; a++) {
    const number = num_arr[a]
    const rest_recursed = get_permutations([...num_arr.slice(0, a), ...num_arr.slice(a + 1)])
    for (const remainder of rest_recursed) result_arr.push([number, remainder].join(''))
  }
  
  return result_arr
}

const get_number_permutations = number => {
  const result_arr = []
  const num_string = number.toString()
  const num_arr    = num_string.split('')
  const length     = num_string.length
  const result = [...new Set(get_permutations(num_arr))]

  result.forEach(string => {
    if (string.length === length && string[0] !== '0') result_arr.push(Number(string))
  })

  return result_arr
}

const get_primes_from_array = (array, max = -1) => {
  const result_arr = []

  array.forEach(number => {
    if (
      is_prime(number) &&
      (max === -1 || number <= max) 
    ) result_arr.push(number)
  })

  return result_arr
}

const has_required_amount_of_prime_permutations = prime => {
  const perms = get_number_permutations(prime)
  const primes_from_perms = get_primes_from_array(perms, $arg__upper_limit)

  if (primes_from_perms.length === $arg__number_of_prime_permutations + 1) return primes_from_perms
  return false
}

const recursively_reduce_primes_with_correct_amount_of_prime_permutations = () => {
  if (primes.length > 0) {
    const prime = primes.shift()
    const prime_perms = has_required_amount_of_prime_permutations(prime)

    if (prime_perms) {
      result.primes_with_required_number_of_prime_permutations.push(prime)
      prime_perms.forEach(perm => {
        const index = primes.indexOf(perm)
        if (index !== -1) primes.splice(index, 1)
      })
    }
    recursively_reduce_primes_with_correct_amount_of_prime_permutations()
  }
}

/* 
  Logic
  Do the thing 
*/

const result = {
  primes_with_required_number_of_prime_permutations : [],
  smallest_prime        : 0,
  largest_prime         : 0
}

const primes = get_primes($arg__upper_limit)
recursively_reduce_primes_with_correct_amount_of_prime_permutations(primes)
result.primes_with_required_number_of_prime_permutations.sort((a, b) => a - b)
result.smallest_prime = result.primes_with_required_number_of_prime_permutations[0] || 0
result.largest_prime  = result.primes_with_required_number_of_prime_permutations[result.primes_with_required_number_of_prime_permutations.length - 1] || 0

return [
  result.primes_with_required_number_of_prime_permutations.length,
  result.smallest_prime,
  result.largest_prime
]
}

// console.time('perms')
// console.log(permutational_primes(1000, 1))
// console.log(permutational_primes(1000, 2))
// console.log(permutational_primes(1000, 3))
// console.log(permutational_primes(1000, 4))
// console.log(permutational_primes(1000, 5))
// console.log(permutational_primes(2000, 1))
// console.log(permutational_primes(2000, 2))
// console.log(permutational_primes(2000, 3))
// console.log(permutational_primes(2000, 4))
// console.log(permutational_primes(2000, 5))
// console.log(permutational_primes(3000, 1))
// console.timeEnd('perms')