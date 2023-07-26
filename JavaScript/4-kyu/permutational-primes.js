/*Permutational Primes*/

//global scope
const cached_primes = []
const cached_perms = {}

const is_prime = number => {
  if (number > 2) {
    for (let i = 3; i < number; i++) if (number % i === 0) return false
    return true
  } else return false
}

for (let i = 1; i < 50000; i+=2) if (is_prime(i)) cached_primes.push(i)

const permutational_primes = (
    $arg__upper_limit, 
    $arg__number_of_prime_permutations
  ) => {
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
    const result     = [...new Set(get_permutations(num_arr))]
    
    for (let i = 0; i < result.length; i++) {
      if (result[i][0] !== '0') result_arr.push(Number(result[i]))
    }

    return result_arr
  }

  const get_primes_from_array = (array) => {
    const result_arr = []

    array.forEach(number => {
      if (cached_primes.includes(number)) {
        result_arr.push(number)
      }
    })

    return result_arr
  }
 
  const has_required_amount_of_prime_permutations = prime => {
    let primes_from_perms

    if (cached_perms[prime]) {
      primes_from_perms   = cached_perms[prime]
    } else {
      const perms         = get_number_permutations(prime)
      primes_from_perms   = get_primes_from_array(perms)
      cached_perms[prime] = primes_from_perms
    }

    const filtered_primes_from_perms = primes_from_perms.filter(number => number <= $arg__upper_limit)

    if (filtered_primes_from_perms.length === $arg__number_of_prime_permutations + 1) return primes_from_perms
    return false
  }
  
  const get_primes = () => {
    let   number_of_primes_that_have_enough_perms = 0
    let   first                                   = true
    let   lowest_prime                            = 0
    let   highest_prime                           = 0
    const skip_arr                                = []

    for (let i = 0; i < cached_primes.length; i++) {
      const prime = cached_primes[i]
      
      if (prime > $arg__upper_limit) break
      
      if (skip_arr.includes(prime)) continue

      const perms = has_required_amount_of_prime_permutations(prime)

      if (perms) {
        if (first) {
          lowest_prime = cached_primes[i]
          first = false
        }

        highest_prime = prime
        skip_arr.push(...perms)
        number_of_primes_that_have_enough_perms++
      }
    }

    return [number_of_primes_that_have_enough_perms, lowest_prime, highest_prime]
  }

  return get_primes()
}

console.time('perms')
console.log(permutational_primes(500, 2))
// console.log(permutational_primes(1000, 4))
// console.log(permutational_primes(1000, 5))
// console.log(permutational_primes(2000, 1))
// console.log(permutational_primes(2000, 2))
// console.log(permutational_primes(2000, 3))
// console.log(permutational_primes(2000, 4))
// console.log(permutational_primes(2000, 5))
// console.log(permutational_primes(40829, 4))
// console.log(permutational_primes(50000, 2))
// console.log(permutational_primes(3000, 1))
console.timeEnd('perms')
