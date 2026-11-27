// !synchronous and asynchronous
// console.log("program started")

const { getValueAsType } = require("framer-motion");

// console.log("program mid");
// for (let i=0;i<1023;i++){
//     console.log("loding...")

// }
// console.log("dealing with impdata");
// console.log("prgrm ended");


// !asynchronous code execution
// ~1.setTimeout
// console.log("program started")
// console.log("program mid");
// function handlingData(){
// // for (let i=0;i<1023;i++)
// //     console.log("loding...")

// // }
// console.log("done with the prgrm");
// }
// setTimeout(handlingData,5000)// after a 5sec delay it will excute.here it is not the delay to execute the code ,it is delay to dump the data to taskqueue
// console.log("dealing with impdata");
// console.log("prgrm ended");


 // ~2.setinterval
// console.log("program started")
// console.log("program mid");
// function handlingData(){
 // for (let i=0;i<1023;i++)
 //     console.log("loding...")

 // }
// console.log("done with the prgrm");
// }
// setInterval(handlingData,2000)// after a 2sec

// console.log("dealing with impdata");
// console.log("prgrm ended");

// ~3.clearTimeout
// console.log("program started")
// console.log("program mid");
// function handlingData(){
 // for (let i=0;i<1023;i++)
 //     console.log("loding...")

// }
// console.log("done with the prgrm");
// }
// clearTimeout(handlingData)
// setTimeout(handlingData,2000)// after a 2sec

// console.log("dealing with impdata");
// console.log("prgrm ended");



// ~4.clearInterval
console.log("program started")
console.log("program mid");
let interval=setInterval(()=>{
    console.log("program...");
    
},1700)//


setTimeout(()=>{
    clearInterval(interval)
},6000)//within this sechow many times it will print

console.log("dealing with impda ta");
console.log("prgrm ended");



