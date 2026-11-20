//~destructring means -->breaking a big structure like an array or obj into smaller pieces.we should maintain order
// let colors=['red','green','blue','white','black']
// console.log(colors[2]);insted of index
// let[r,g,b,w,b2]=colors// thats why we should nik names so we can access easily
// let[r,,,,b2]=colors
 // console.log(r);//red
 // console.log(g);//green
// console.log(b);//blue
// console.log(b2);

//~object destructuring-->extracting properties from the object
let userdata={
    first_name:'deepthi',
    last_name:'m',
    age:21,
    IsLoggedIn:true
}
// let{first_name,IsLoggedIn,last_name}=userdata
// console.log(userdata.first_name); instead of we can use destructuring
// console.log(first_name);
let{first_name:fn,IsLoggedIn:is,last_name:ln}=userdata// we can use allias instead of objname
console.log(fn);
console.log(ln);
console.log(is);



