12.trim()-->removes strings ending and starting spaces
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
// console.log(str.replace("ra","so"));