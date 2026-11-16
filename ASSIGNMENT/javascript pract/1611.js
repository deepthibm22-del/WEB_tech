 1.at()--->returns a specified chars at a specified positions
// let str1='JavaScript'
// console.log(str1.at(0));
// console.log(str1.at(-1));

//~ 2.charAt()--->returns a specified chars at a specified positions qwe6
// let str2='Javascript'
// console.log(str2.charAt(5));
// console.log(str2.charAt(-1));//no output because it supports only positive values


//~ 3.CharcodeAT()--->returns the asciicode(unicode) for specified char postioined
// let str3='Javascript'
// console.log(str3.charCodeAt(5));//99-->c

//~ 4.concate-->it combines 2str and returns a new string
// let str1='Java'
// let str2='script'
// let newstr=str1.concat(str2 ," ","Wonderful ","scripting language")
// console.log(newstr);


//~ 5.includes--> it identifies substring and returns true or false.
// let str= "javascript is a wonderful language"
// console.log(str.includes('is'));//true
// console.log(str.includes('isdgts'));false
// console.log(str.includes('is',20));//false bcz here it checks index numb after index number it will check the substring is present are not

//~ 6.indexof()
// let str= "javascript is a wonderful language"
// console.log(str.indexOf('hgjj'));//-1-->because no like this startig index
// console.log(str.indexOf('a',2));//here we can specify from which index it should search for char


//~ 7.lastIndexOf()--> it takes the last charachter index.not their means -1
// let data ="soma raja"
// console.log(data.lastIndexOf("a"));


//~ 8.split()-->splits string into array based on separator.we can use separators like spaces,characters 
// let str="Javascript is a wonderful lanuage"
// console.log(str.split(" "));//spaces as separator
//~ 9.split(separator,limit)
// console.log(str.split("",4));


//~ 10.toUpperCase ()
// let chr="deepthi"
// console.log(chr.toUpperCase ());
