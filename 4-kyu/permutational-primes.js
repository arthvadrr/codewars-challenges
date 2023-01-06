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

  const recursively_reduce_primes_with_correct_amount_of_prime_permutations = primes => {
    const prime = primes.shift()
    const prime_perms = has_required_amount_of_prime_permutations(prime)

    if (prime_perms) {
      result.primes_with_required_number_of_prime_permutations.push(prime)
      console.log(prime_perms)
      prime_perms.forEach(perm => {
        const index = primes.indexOf(perm)
        if (index !== -1) primes.splice(index, 1)
      })
    }

    if (primes.length > 0) {
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
  console.log(result.primes_with_required_number_of_prime_permutations)

  // return [
  //   result.primes_with_required_number_of_prime_permutations.length,
  //   result.smallest_prime,
  //   result.largest_prime
  // ]
}

console.log(permutational_primes(1000, 3))
//console.log(getNumberPermutations(12))
//console.log(getNumberPermutations(3699))