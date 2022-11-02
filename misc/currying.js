const message = name => verb => noun => `${name} ${verb} ${noun}`;
message('arth')('eats')('noodles')
// logs "arth eats noodles"



/*************************************/
//Stepping through the code;
    message('arth')('eats')('noodles')
// 1^             2^      3^
/*************************************/



/*
1. invoke message while passing 'arth' as the argument for the name param, (storing 'arth')

now we kinda but not exactly have
*/
const anonymous1 = verb => noun => {`${'arth'} ${verb} ${noun}`}
anonymous1('eats')('noodles');
/*



2. invoke the anonymous function message returned and pass 'eats' as the argument for the verb param (storing 'eats)

now we kinda but not exactly have
*/
const anonymous2 = noun => {`${'arth'} ${'eats'} ${noun}`}
anonymous2('noodles');
/*



3. invoke the anonymous function returned by the anonymous function returned by message passing 'noodles' as the argument for the noun param (stores 'noodles'). Returns a string


now we kinda but not exactly have
*/
`${'arth'} ${'eats'} ${'noodles'}`
'arth eats noodles'