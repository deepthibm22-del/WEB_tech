// ~internal working
/* callstack to it goes to GEC(global execution context)
which has a 2 types or components creation and execution phase
1.in creation -->memory allocation of varible declaration function declaration can be done
2.in execution -->it executes line by line*/


// !ex--1
//console.log(data);//undefined-->because first in creation it will be undefined no initialization and declaration in  execution it gives undefined
//var data="somu"
//console.log(data);//somu

//~ internal execution of ex1
// var data; //undefined
// console.log(data);//undefined
// data="somu"//initialization
// console.log(data);//somu


// !ex-->2-->but in let and const it will give reference error because in creation phase it will not be undefined it will be in temporal dead zone
//console.log(data);
// let data="somu"
// console.log(data);


// ~internal execution of ex2
//console.log(data);//reference error
// let data="somu"//initialization
// console.log(data);//somu


// internal execution of function declaration

// !ex-1
// console.log(data);
// function print(){
//     console.log("print");   
// }
// var data="somu"
// console.log(data);
// print()



// !ex-2
console.log(data);
function print(){
    let name='rani'
    console.log(data);
    console.log(name);
}
var data="somu"
console.log(data);
print()