//~Modules-->a way to split and organise js code into smaller ,reusable places.1.import and 2.export
// ~two types module
// !1.common js-->it is a traditonal approach to handle the code
// !2.ES Module-->es6 module also.types are
// ~named exports
// ~diffault export



// let toys=require('./china')
// console.log(toys)


// let print = require('./china')
 // console.log(toys);
// print()
// console.log(print);


// !exporting function using common JS 
let anything=require('./china')
// anything.print()
// console.log(anything.toys);


// ~we can use  destructuring easily in fun()
let {print,toys}=anything
print()
console.log(toys);


// !exporting objects using Common JS
// let any=require('./china')
// console.log(any);
// console.log(any.full_name);



