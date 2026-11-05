// creation of array[]

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

// ~creating array using constructor
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

// let data2=[1,2,3,4,5]
// console.log(Array.isArray(data2));

// if(Array.isArray(data2)){
//     console.log("data is array");
// }
// else{
//     console.log("data is not array");
// }

// ~Array.of()-->it will create a new array 
// let data=Array.of(1,2,3,4,5)
// console.log(Array.of(1,2,3,4,5));
// console.log(Array.of(10));

// ~instance method
// !1.push and 2.pop used perform opertaion at the end of the array
//~ 1.push-->it is used add the element at the end of the array.
// let array=[1,2,3,4,5]
// array.push("somu")
// console.log(array);

// ~2.pop()-->it is used remove the element at the end of the array.
// array.pop()
// console.log(array)

// !1.shift and unshift used perform opertaion at the starting of the array
// ~1.unshift()-->it is used add the element at the starting of the array.
// let array=[1,2,3,4,5]
// array.shift()
// console.log(array);//[ 2, 3, 4, 5 ]

// ~2.shift()-->it is used remove the element at the starting of the array.
// array.unshift("somu")
// console.log(array);//[ 'somu', 2, 3, 4, 5 ]

//  !3.slice()
// let array=[10,20,30,40,50]
// console.log(array.slice(2));
// console.log(array.slice(2 ,5));
// console.log(array.slice(-2));
// console.log(array.slice(-4,-2));
// console.log(array.slice(4,2));//SI greater then EI 
// console.log(array.slice(-1,-4));//


// !4.splice()
// let array=[10,20,30,40,50]
//let DeleteData=array.splice(1,2)// only deleting here
// let DeleteData=array.splice(1,0,'somu','ramu','raju')// only to add
// console.log("DeleteData"+DeleteData);
// console.log(array);

// !5.concat()-->it is used to merge two or more arrays
// let arr1=[10]
// let arr2=[20,30]
// console.log(arr1.concat.arr2);

// !6.reverse()
// let array=[10,20,30,40,50]
// console.log(array.reverse());


// //!7.join() 
// console.log(array.join());
// console.log(array.join(" "));
// console.log(array.join("$"));

// !8.indexof()
// let array=[10,20,30,40,50,30]
// console.log(array.indexOf(30));

// !9.lastIndexOf
// console.log(array.lastIndexOf(30));

// !10.includes()-->it will check whether the given element is present in the array or not
// let arr=[1,2,3]
// console.log(arr.includes(2));//true
// console.log(arr.includes(4));//false


// ! 11.entries
// let array=[10,20,30,40,50]
// console.log(array.entries());//Object [Array Iterator] {} so we use
// for (let x of array.entries()){
//     console.log(x);
    
// }

//!12. keys-->it returns only keys
// let array=[10,20,30,40,50]
// console.log(array.keys());//Object [Array Iterator] {} so we use
// for (let x of array.keys()){
//     console.log(x);
// }


//!13.values-->it returns only values
// let array=[10,20,30,40,50]
// console.log(array.values());//Object [Array Iterator] {} so we use
// for (let x of array.values()){
//     console.log(x);}

// !14.every-->it checks whether all the elements in the array pass the test implemented by the provided function. 
// !It returns a Boolean value.

// let arr1=[2,4,6]
// let data=['red','blue','green']
// console.log(arr1.every((num)=>num%2 === 0));
// console.log(data.every((data)=>data === 'green'));




















