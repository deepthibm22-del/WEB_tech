let data1="deepthi"
// console.log(data.padEnd(10,"o"));
// console.log(data.padEnd(4,"o"));//deepthi because the length of the string is already 7 so it will not add any char to the end of the string

//~ 20.replace()-->it replaces the specified string with new string
// let str="ramu ramu"
// console.log(str.replace("ra","so"));//somu ra -->it will replace only the first occurence of the string

//~ 21.replaceAll()-->it replaces all the specified string with new string.it will replace all the occurence of the string
// let str1="sonu sonu"
// console.log(str1.replaceAll("nu","mu"));//!somu somu


// ~22.toString()-->it will convert string into the primitive datatype
let data=new String("deepthi")
// console.log(data);//[String: 'deepthi']
console.log(data.toString());//string
console.log(typeof data);//object

// ~slice -->
// let data=("javascript is a wonderful language")
// console.log(data.slice(10));
// console.log(data.slice(10,30));
// console.log(data.slice(-10,-5));
// console.log(data.slice(-2));

//~ substring-->it is similar to slice but it does not support negative indexing
// console.log(data.substring(10));
// console.log(data.substring(30,10));
// console.log(data.substring(-10,-5));//it will return the whole string because it does not support negative indexing
// console.log(data.substring(-2));

// ~count of  chars in string without using length method
// let str="javascript is a wonderful language"
// count=0
// for (let i=0;n.charAt(i)!='';i++){
//     count++

// }
// console.log(count)str.includes('is'))

// ~count of ovels
// count=0
// for(let i=0;i<str.length;i++){
//     if("aeiou".includes(str[i]))
//     count++
// }