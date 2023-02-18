const fractionToPeriodic = (n, d, rem=(n % d)) => {
    const current = String(Math.floor(n / d))
    const format  = (whole, dec, repeating) => `${whole}${decies.length ? '.' : ''}${dec.join('')}${repeating ? '(' + repeating.join('') + ')' : ''}`
    let rems      = [], decies = []

    do {
        if (rem === 0) return format(current, decies)
        if (rems.includes(rem)) return format(current, decies.splice(0, rems.indexOf(rem)), decies)
        rems.push(rem)
        decies.push(Math.floor(rem * 10 / d))
        rem = (rem * 10) % d
    } while(true)
}