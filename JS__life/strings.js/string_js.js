// ~ we can specify above values in string
// var s1='a😎$2.'
// console.log(s1);

// var s2='it is the dog's fault' //error
// console.log(s1)
// console.log(typeof s1);


//~ string in backtick and double quotes
// var s3=`"it is the dogs fault"`
// console.log(s3)

// ~multiline string not possible sing ''and " "
// var s5=`hello world
// today is thursday`
// console.log(s5)

// ~by template
// ~string interpolation
// let first_name="sneha"
// let last_name="soundharya"
// console.log();



// ~ using string object
// let str=new String("Javascript")
// console.log(str);
// console.log(typeof str);


// ~length and indexing
// let data="deepthi"
// console.log(data.length);
// console.log(data[5]);//indexing
// console.log(data[data.length-1]);// -1 indexing


// ~string methods
//~fromCharCode-->method used in string from unicode point
// let str=String.fromCharCode(74,97,118,97,83,99,114,105,112,116)
// console.log(str);

// let name=String.fromCharCode(68,101,101,112,116,104,105,46,77)
// console.log(name);

// ~fromcodepoint-->method used when we 6
// let emoji=String.fromCodePoint(128516);
// console.log(emoji);

// ~raw() string--->it will print rawcode means exactly what we defined in the variable
// let raw=String.raw`hello87@#$"fjdfj`
// console.log(raw);


//! insatance methods
//~ 1.at()--->returns a specified chars at a specified positions
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

//~ 11.tolowerCase ()
// let chr1="DEEPTHI"
// console.log(chr1.toLowerCase ());

//~ 12.trim()-->removes strings ending and starting spaces
// let str3="    Javascript is a wonderful lanuage      "
// console.log(str3);//before trim
// console.log(str3.length);//before trim length
// console.log(str3.trim());//trim
// console.log(str3.trim().length);//after trim length
//~13. trimStart-->it removes starting space 
// console.log(str3);
// console.log(str3.trimStart());
// 14.trimEnd
// console.log(str3.trimEnd());


// ~15.startsWith()-->it checks whether the string starts with specified char or not
// let link="https://www.google.com"
// console.log(link.startsWith("https"));//true
// console.log(link.startsWith("http"));//false

// ~16.endsWith()-->it checks whether the string ends with specified char or not
//  let data="image.png"
//  console.log(data.endsWith(".png"));//true
//  console.log(data.endsWith(".jpg"));//false

// ~17.repeat()-->it repeats the string for specified number of times
// let Data="Hello   "
// console.log(Data.repeat(3));//HelloHelloHello


// ~18.padStart()-->it adds the specified string to the start of the string until it reaches the specified length
// let data="deepthi"
// console.log(data.padStart(10,"o"));//!ooooodeepthi

//~ 19.padEnd()-->it adds the specified string to the end of the string until it reaches the specified length
// let data="deepthi"
// let data1="deepthi"
// console.log(data.padEnd(10,"o"));
// console.log(data.padEnd(4,"o"));//deepthi because the length of the string is already 7 so it will not add any char to the end of the string

//~ 20.replace()-->it replaces the specified string with new string
// let str="ramu ramu"
// console.log(str.replace("ra","so"));//somu ra -->it will replace only the first occurence of the string

//~ 21.replaceAll()-->it replaces all the specified string with new string.it will replace all the occurence of the string
// let str1="sonu sonu"
// console.log(str1.replaceAll("nu","mu"));//!somu somu


// ~22.toString()-->it will convert string into the primitive datatype
// let data=new String("deepthi")
// console.log(data);//[String: 'deepthi']
// console.log(typeof data.toString());//string
// console.log(typeof data);//object

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

// console.log(count);

// ~convert first letter to uppercase
// let str="javascript is a wonderful language"
// console.log(str.charAt(0))

// console.log(str.charAt(0).toUpperCase()+str.slice(1));

// console.log(str.replace("j","J"));

// ~remove the spacebetween and stsarting and ending
// str.concat("javascript","is","Wonderful","scripting","language")
// console.log(str.replaceAll(" ","").trim());



    
