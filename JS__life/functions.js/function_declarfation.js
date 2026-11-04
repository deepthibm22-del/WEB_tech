// function Print(){
//     console.log("hello JavaScript");
//     console.log("how are you");
// }
// Print() //function calling statement

//function GoodMorning() {
//     console.log("Good morning!");
// }
// GoodMorning() //function calling statement


// function GoodAfternoon() {
//     console.log("Good afternoon!");
// }
// GoodAfternoon()

// function GoodEvening() {
//     console.log("Good evening!");
// }
// GoodEvening()


// ~parameters and arguments
// ~named function
// function greet(anything){
//      console.log("welcome "+anything);
//  }
//greet("raani")

//timing function
// function greet(time){
//     if(9<time && time<12) 
//         console.log("goodmorning");
//     else if(12<=time && time<5)
//         console.log("goodafternoon");
//     else if(5<time && time<6)
//         console.log("goodevening");
//     else 
//         console.log("invalid");
// }
// greet(10)
// greet(3)
// greet(4)
// greet(8)



 // ~return keyword
//  function TotalMarks(m,c,p,e,k){
//     console.log(m+c+p+e+k);// we cannot use because we cannot perform any further operations (ex:to add grace marks)
//      return m+c+p+e+k
//           ahdghsidfhd //after return keyword it will not execute
//  }
//   let result= TotalMarks(60,40,80,35,99)
//   console.log(result+5);


// Anonymous funtion
let bhooth=function() {
     console.log("hello I am Bhooth")
 } 
 bhooth()// we dont have a function name so we create a variable and store the function inside a varible.
          // directly calling a variable insted of function


// Arrow Function-->shorter way to write functions-----
// //normal function-
// function addition(a,b)
// {
//     console.log(a+b);
// }
// addition(10,20);





//exp for hof and callback

// function Greeting(callback){
//         console.log("Welcome to xyz cafe");
//         console.log("you can order here.......");
//    chickenBiryani() when we call directly  will be some problems like manually we should enter every time
// }
// function  chickenBiryani(){
//         
//                 console.log("thank you for your order");
//                 console.log("your order ChickenBiryani is getting ready");
//                 console.log("here is your order......");
//          }

// function vegBiryani(){
// 
//         console.log("thank you for your order");
//         console.log("your order vegBiryani is  getting ready");
//         console.log("here is your order....");
//        }
// Greeting(chickenBiryani) //passing a function as an argument to another function is called callback function
// // Greeting(vegBiryani)

// function Greeting(callback,takeaway){
//         console.log("Welcome to xyz cafe");
//         console.log("you can order here.......");
//         // chickenBiryani() when we call directly  will be some problems like manually we should enter every time
//         callback(takeaway)

// }

// function vegBiryani(takeaway){
//         setTimeout(()=> {
//         console.log("thank you for your order");
//         console.log("your order vegBiryani is  getting ready");
//         console.log("here is your order....");
//         },5000);
// }
// function takeaway(){
//         console.log("your order is ready for takeaway");
// }
// Greeting(chickenBiryani,takeaway) //passing a function as an argument to another function is called callback function
// Greeting(vegBiryani) 


 
