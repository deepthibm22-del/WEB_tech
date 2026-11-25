// let toys="car"
// module.exports=toys;

let toys="car"
function print(){
    console.log("hello public");
    
}
module.exports=print
module.exports=toys

// !exporting multiple data from common js
module.exports ={print,toys}


// ~exporting obj,we can export multiple obj

// let emp={
//     full_name:'deepthi',
//     age:21,
//     pan_no:"123df45",
//     IsLoggedIn:true
// }
// module.exports=(emp)