// let data=["somu",80,true]
// console.log(data);
// console.log(typeof data);



// console.log(data[1]);
// ~ string is mutable
// data[1]="90"
// console.log(data);
// ~length

// ~function inside arrray
// let data=["somu",80,true,function(){console.log("hello i am inside array as item of array")}]
// data[3]()
// console.log(data)

// ~creating array usin
// g constructor
// let array=new Array(10,20,30,40,50)
// let array=new Array(100)
// console.log(array);
// console.log(array.length);

// !static methods
// ~Array.from()-->it will convert array like object into array.str can be converted to array using tis method
// let data="javascript"
// let data=true // []empty array
// let data="6789"//number
// console.log(Array.from(data));

// ~another syntax of Array.from()
// let data1=[1,2,3,4,5]
// console.log(Array.from(data1),(ch)=>ch*5)

//  ~ to convert string to array with adding 0 and toString() method to convert array into string
// let data="javascript"
// console.log(Array.from(data,(ch)=>ch+0).toString().replaceAll(","," "));
// console.log(toString(data))

// ~Array.isArray()-->it will check whether the given data is array or not

let data2=[1,2,3,4,5]
// console.log(Array.isArray(data2));

if(Array.isArray(data2)){
    console.log("data is array");
}
else{
    console.log("data is not array");
}

// ~Array.of()-->it will create a new array 
let data=Array.of(1,2,3,4,5)
// console.log(Array.of(1,2,3,4,5));
console.log(Array.of(10));



