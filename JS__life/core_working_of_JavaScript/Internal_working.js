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
// console.log(data);
// function print(){
//     let name='rani'
//     console.log(data);
//     console.log(name);
// }
// var data="somu"
// console.log(data);
// print()

// ex3
// console.log(age);
// var age=20
// function student(){
//     var name="rani"
//     let marks=90
//     console.log(name);
//     console.log(marks);
//     console.log(age);
// }
// console.log(age);
// student()

// !ex 4
// var x=15;
// var name="rani";
// function student(){
  // var name="rani";
//     console.log(x);
//     console.log(name);
// }
// console.log(x);
// student()
// console.log(name);


// ~function expression
// console.log(data)
// printFun()
// let printFun=function print(){
//     let name='rani'
//     console.log(data);
//     console.log(name);
// }
// var data="somu"
// console.log(data);
// printFun()


// scope-->is a region where we can access a variable
// 1.global scope---> is a scope which is defined outside the function or block and called any where in the prgrm is known as global scope
// console.log(data);
// function print(){
//     let name='rani'
//     console.log(data);//global scope-->because acessing somu outside the fun()
//     // console.log(name);
// }
// var data="somu"
// console.log(data);
// print()


// console.log(data);
// function print(){
//     let name='rani'
//     console.log(data);
    
// }
// print()
// console.log(name);
// var data="somu"
// console.log(data);//error


// function scope
// let x=10
// function print(){
//     x=20
//     console.log(x);//20
// }
// print()
// console.log(x);//20


// let x=10
// function print(){
//     var x=20
//    console.log(x);//20
// }
// print()
// console.log(x)//10

