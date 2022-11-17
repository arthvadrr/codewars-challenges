/*
testing commands
*/

const foo = bar => bar(foo)
const bar = foo => foo(bar)
foo(() => console.log('foobar'))