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

// ~16.some-->atleast one should pass the implemented test
// let array=[1,2,3,4,5,6]
// console.log(array.some((num)=>num>5));
// console.log(array);

// ~17.fill-->
// let array=[1,2,3,4,5,6]
// console.log(array.fill("somu",3,4));
// console.log(array);

// ~18.find()-->it will return the first element which satisfies the condition
// let array=[1,2,3,4,5]
// console.log(array.find((num)=>num%2!==0));//1
// console.log(array.find((num)=>num%2===0));//2


// ~19.findLast()-->it will return the last element which satisfies the condition
// let array=[1,2,3,4,5]
// console.log(array.findLast((num)=>num%2===0));//4


// ~20.findIndex()-->it will return the index of first element which satisfies the condition
// let array=[1,2,3,4,5]
// console.log(array.findIndex((num)=>num%2===0))//1

// ~21.findLastIndex()-->it will return the index of last element which satisfies the condition
// let array=[1,2,3,4,5]
// console.log(array.findLastIndex((num)=>num%2!==0));//3

// ~22.flat()-->it will flatten the array
// let array=[1,2,[3,4,[5,6]],['a', 'b', ['c', 'd']]]
// console.log(array.flat(2));//specifying nested values number of levels to flatten
// console.log(array.flat(Infinity));
// console.log(array.flat());//1 will be default value if we not specify the levels to flatten 


// ~23.toreversed()-->it will reverse the array and return the new array.it will not affectthe original array
// let array=[1,2,3,4,5,6,[7,8,9],10]
// console.log(array.toReversed());//[ 5, 4, 3, 2, 1 ]
// console.log(array);

//~ 24.tospliced()-->it will return the new array and it will not affect the original array


// ~25.sort()-->it will sort the array and it will affect the original array.it uses lexicaal ualues
let data=[5,2,10,100,20,1]
// console.log(data.sort());//[ 1, 10, 100, 2, 20, 5 ] it will not becuse it uses lexical values.it extracts first digit and sort it
// to over come this we should use function
// console.log(data.sort((a,b)=>a-b))//[ 1, 2, 5, 10, 20, 100 ]
// console.log(data.sort((a,b)=>b-a));

// ~26.toSorted()-->
// let data2=[1,4,5,6,2,3]
let data3=[]
console.log(data2.toSorted())
console.log(data2);













