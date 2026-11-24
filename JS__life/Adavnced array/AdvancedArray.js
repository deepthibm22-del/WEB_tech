// !Advanceed array
// ~Map-->iterate over in the array and return new array,order matters,it executes function and returns new array
// let array=[1,2,3,4,5]
// function multiply(x){
//     return x*5
// }
// let newArray=array.map(multiply)
// console.log("New array " + newArray);
// console.log("org array " + array);


// let newArray=array.map(x=> x*5)

// !1.using map--->cube of items
// array.map((item,index,orgarray)=>{
//     console.log(item,item**3,index,orgarray);
// })


// !2.let newArray=array.map(x=> x**3)
//  console.log("New array " + newArray);
// console.log("org array " + array);


// ~filter-->performs the operation,it creates a new array it contains all the  elements that pass a certain condition
//  let data=[1,2,3,4,5]
// let newdata=data.map((item)=>{
//     if(item%2==0)return item
// })
// console.log(newdata);

// ~filter odd numbers
// let result=data.filter((item,index,orgarray)=>item%2)
// console.log(result)

// ~filter greater than 5 letter names
// let str=['ramu','deepthi','kavana','laxmi']
// let result=str.filter((item,index,orgarray)=>item.length>5)
// console.log(result)

// ~filter r names
// let str=['ramu','deepthi','kavana','laxmi','rani']
// let result=str.filter((item,index,orgarray)=>item[0]=='r')
// console.log(result)

// ~filter ignore empty str give a str
// let str=['ramu','deepthi','kavana','laxmi','','']
// let result=str.filter((item,index,orgarray)=>item!='' && item)
// console.log(result)

// ~filter name includes char a in it
// let str=['ramu','deepthi','kavana','laxmi','','']
// let result=str.filter((item,index,orgarray)=>item.includes('a'))
// console.log(result)

// ~filter the numbers which consist 5 in thier value
// let data=[20,35,55,45,65]
// let result=data.filter((item,index,orgarray)=>item.toString().includes("5"))
// console.log(result);


//!3.reduce-->method executes a reducer function returns the single output
let data=[1,2,3,4,5,6,7,8,9,10]
// let sum=0
// for(let i=0;i<data.length;i++){
//     sum=sum+data[i]
// }
// console.log(sum);//instead of this we use reduce

// let result=data.reduce((sum,currnum)=>sum+currnum)

// console.log(result)
// 




// 1.findout the sum of all the ven numbers in the Array
let result1=data.filter((item,index,orgarray)=>item%2==0).reduce((sum,currnum)=>sum+currnum )
console.log(result1)

// 2.count all the odd number in the given array
// 3.find the sum of squares of given elemnt 
// 4.count how many numbers divisibele by 2 and 3
// 5.find total number of chars in the string




