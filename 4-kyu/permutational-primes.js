const permutational_primes = (
    $arg__upper_limit, 
    $arg__number_of_prime_permutations
  ) => {

  const result = {
    primes                : [],
    number_of_perm_primes : 0,
    smallest_prime        : 0,
    largest_prime         : 0
  }

  const getPrimes = number => {
    if (number > 2) {
      const primes = []
      let num      = number
  
      for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
          primes.push(i)
          num /= i
        }
      }
  
      return primes
    }
  }

  const getNumberPermutations = number => {
    const result_arr = []
    const num_string = number.toString()
    const num_arr    = num_string.split('') 
    let   place      = num_string.length
    let   count      = 0
  
    while (count.toString().length !== place) count++
  
    while (count.toString().length === place) {
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

  return [
    result.number_of_perm_primes,
    result.smallest_prime,
    result.largest_prime
  ]

}


const isPrime = number => {
  if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false
    }
    return true
  } else return false
}

const getPrimes = number => {
  const prime_array = []
  
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) prime_array.push(i)
  }

  return prime_array
}
//console.log(permutational_primes(1000, 3))
//console.log(getNumberPermutations(12))
//console.log(getNumberPermutations(3699))