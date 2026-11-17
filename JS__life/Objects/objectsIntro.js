// ~object-->programmtical reprsentation of real world entity .which has its own state and behaviour
//~key and value are called properties and separte them with comma.when excution it will not be in order may shuffled
let userInformation={
    name:"deepthi",
    IsLoggedIn:true,
    age:21,
    
    reading:function(){
        console.log("Somu is reading");   
    },
    sleeping:function(){
        console.log("Somu is sleeping");
        
    }
}
console.log(userInformation)