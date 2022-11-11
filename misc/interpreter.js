const interpreter = (instructions, token) => {
  const token_arr = token.split('');
  let pos = 0;

  const flip  = () => token_arr[pos] = token_arr[pos] === '0' ? '1' : '0';
  const right = amount => pos += amount;
  const left  = amount => pos -= amount;
  const cache = {openers: [], closers: []};
  
  for (let a = 0; a < instructions.length; a++) {
    if (instructions[a] === '[') cache.openers.push(a);
    if (instructions[a] === ']') cache.closers.push(a);
  }

  const get_matching_opener = i => cache.openers[cache.openers.length - 1 - cache.closers.indexOf(i)];
  const get_matching_closer = i => cache.closers[cache.closers.length - 1 - cache.openers.indexOf(i)];

  for (let i = 0; i < instructions.length; i++) {
    if (pos > token_arr.length - 1 || pos < 0) break;
    let repeated = 1;
    let base = i; //so warpDrive will work
    const warpDrive = () => {repeated++;i++;}
    
    switch (instructions[i]) {
      case '*': flip();  break;
      case '>': while(instructions[base + repeated] === '>') warpDrive(); right(repeated); break;
      case '<': while(instructions[base + repeated] === '<') warpDrive(); left(repeated); break;
      case '[': if (token_arr[pos] === '0') i = get_matching_closer(i); break;
      case ']': if (token_arr[pos] !== '0') i = get_matching_opener(i); break;
    }
  }

  return token_arr.join('')
}

console.time('len5')
console.log(`Result: ${interpreter('[*>[>*>]>]', '11001')}; Expected: 01100`)
console.timeEnd('len5')
console.log('\n')

console.time('len8')
console.log(`Result: ${interpreter('*>*>*>*>*>*>*>*', '00101100')}; Expected: 11010011`)
console.timeEnd('len8')
console.log('\n')

console.time('len8')
console.log(`Result: ${interpreter('>>>>>*<*<<*', '00101100')}; Expected: 00000000`)
console.timeEnd('len8')
console.log('\n')

console.time('len8')
console.log(`Result: ${interpreter("*>*>>*>>>*>*", '00101100')}; Expected: 11111111`)
console.timeEnd('len8')
console.log('\n')