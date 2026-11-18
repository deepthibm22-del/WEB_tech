// ~object-->programmtical reprsentation of real world entity .which has its own state and behaviour
//~key and value are called properties and separte them with comma.when excution it will not be in order may shuffled
// let userInformation={
//     name:"deepthi",
//     IsLoggedIn:true,
//     age:21,
    
//     reading:function(){
//         console.log("Somu is reading");   
//     },
//     sleeping:function(){
//         console.log("Somu is sleeping");
        
//     }
// }
// console.log(userInformation)

// ~object syntax
// ~how to access object properties
// !by using dot (.)notation-->
// let var={
//     key:value,
//     key:value,
//     key:value,
//     key:value

// }
// console.log(var.key);

// let xyz={
//     name:'somu',
//     age:23,
//     flag:true
// }
// console.log(xyz.flag);
// console.log(xyz.name);
// console.log(xyz.age);


// aceesing nested object properties
// let userInformation={
//     'name%':"deepthi",
//     "Is LoggedIn":true,
//     age:21,
//     6:21,
    
//     reading:function(){
//         console.log("Somu is reading");   
//     },
//     sleeping:function(){
//         console.log("Somu is sleeping");
        
//     },
//     Favcolors:["red","green","blue"],
//     address:{
//         city:"pune",
//         pincode:12345,
//     }
    

// }
//  let key='name'
// userInformation.reading()
// console.log(userInformation.address.pincode);
// console.log(userInformation.Favcolors);
// console.log(userInformation.Favcolors[0]);//red
// console.log(userInformation.address.city);//pune

//~ acessing by using square[] notation-->properties sholud be in double quotes always inside square
// ~advantages of []

// !1.dynamic data
// console.log(userInformation.key);//undefined
// console.log(userInformation[key]);//deepthi
// console.log(userInformation["age"]);

// !2.spaces
// console.log(userInformation.Is LoggedIn);//error
// console.log(userInformation["Is LoggedIn"]);

// !3.special
// console.log(userInformation.name%);//error
// console.log(userInformation["name%"]);

// !4.numbers
// console.log(userInformation["6"]);

// ~creating
// let userData={
//     name:"somu",
//     age:100,
//     flag:true
// }
// // ~appending the data to existing object
// userData.luckyNo='4'
// console.log(userData);
// userData.phnNo= 67837374378
// console.log(userData);//{ name: 'somu', age: 100, flag: true, luckyNo: '4' }

// // ~updating the existing data
// userData.age=24
// console.log(userData);
// // ~deleting data
// delete userData.luckyNo 
// console.log(userData);


// ~method of objects
let userData={
    name:"somu",
    age:100,
    flag:true
}
// !acessing only keys using keys() method
// console.log(Object.keys(userData));//[ 'name', 'age', 'flag' ]

// !accessing only values using values()method 
// console.log(Object.values(userData));

// !enteries-->used to make keys and values in individual array 
// console.log(Object.entries(userData));//[ [ 'name', 'somu' ], [ 'age', 100 ], [ 'flag', true ] ]
// let NewDataFormate=Object.entries(userData)
// console.log(NewDataFormate);

// !fromentries()-->it gives enteries to original array
// console.log(Object.fromEntries(NewDataFormate));//{ name: 'somu', age: 100, flag: true }







