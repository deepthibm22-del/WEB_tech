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
// let userData = {
//     name: "somu",
//     age: 100,
//     flag: true
// }
// !acessing only keys using keys() method
// console.log(Object.keys(userData));//[ 'name', 'age', 'flag' ]

// !1.accessing only values using values()method 
// console.log(Object.values(userData));

// !2.enteries-->used to make keys and values in individual array 
// console.log(Object.entries(userData));//[ [ 'name', 'somu' ], [ 'age', 100 ], [ 'flag', true ] ]
// let NewDataFormate=Object.entries(userData)
// console.log(NewDataFormate);

// !3.fromentries()-->it gives enteries to original array
// console.log(Object.fromEntries(NewDataFormate));//{ name: 'somu', age: 100, flag: true }

// !4.object.assign()--->it is a method copies the properties from one or more source to new object
// let user1 = {
//     name: 'deepthi'
// }
// let persn_Info = {
//     age: 20,
//     flag: false
// }
// let Info_user = {
//     pass_code: 'ed45hhdio'

// }
// let FinalUserData = Object.assign(Info_user, user1, persn_Info)
// console.log(Info_user)

// !5.object.seal()-->method prevents addition and deletion of new properties,but we can modify the properties
// let emp_Inof={
//     full_name:'deepthi',
//     age:21,
//     pan_no:"123df45",
//     IsLoggedIn:true
// }
// Object.seal(emp_Inof)//~seal we cannot add and delete
// console.log("after sealing the object data")
// delete emp_Inof.age//~ it is not possible
// emp_Inof.age=31 //~it is possible
// emp_Inof.reff='dora' //~it is also not possible bcz data is sealed
// console.log(emp_Inof)

// !7.Object.isSealed-->return boolen value .method used to check is data is sealed or not
// let emp_Inof={
    // full_name:'deepthi',
    // age:21,
    // pan_no:"123df45",
    // IsLoggedIn:true
// }
// Object.isSealed(emp_Inof)

// console.log(emp_Inof);

// if(Object.isSealed(emp_Inof)){
//     console.log("OOooooo shit ,it is sealed can't do any Khand");
// }
// else{
//     console.log("Come on we will do it is no sealed");
// }


// !8.Object.freeze()--->
// let emp_Inof={
//     full_name:'deepthi',
//     age:21,
//     pan_no:"123df45",
//     IsLoggedIn:true
// }
// Object.freeze(emp_Inof)

// //!deletion
// delete emp_Inof.full_name
// // !update
// emp_Inof.age=31
// // !add
// emp_Inof.reff='rani'

// console.log(emp_Inof);

// !9.Object.isFrozen
let emp_Inof={
    full_name:'deepthi',
    age:21,
    pan_no:"123df45",
    IsLoggedIn:true
}
Object.freeze(emp_Inof)
// if(Object.isFrozen(emp_Inof)){
    // console.log("OOooooo shit ,it is sealed can't do any Khand");
//  }
// else{
//    console.log("Come on we will do it is no sealed");
//  }

// !10.object.defineProperty-->method add or delete on one property explore it
// let student={};
// Object.defineProperty(student,"name"{
//         value:'deepthi',
//         writable:true,
//         enumerable:true,
//         configurable:true
//     })
    


// !11.Object.hasOwn()--->it checks thst property is present or not



// !12.Object.is()---->if the value is same or not compare not only values objects als it checks
// let result=Object.is(emp_Inof.age,21)//true,"21"-->false
// console.log(result);

// let rani_Inof={
//     full_name:'deepthi',
//     address:'bengaluru'
// }
// let result=Object.is(emp_Inof,rani_Inof)
// console.log(result)












