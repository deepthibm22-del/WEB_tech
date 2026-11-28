// &Creating promise
// let myPromise =new Promise((resolve,reject)=>{
//     console.log("I am inside a execution function");

//     resolve("data is received")
// reject("Data is not received")
// })
// console.log(myPromise);



// !handling promise 
// !we have two ways to handle promise
//? 1.traditonal way(.then() and .catch())
// ~then-->when initial it is in the obj format it used to  capture a resolved data.syntax-->var.then()
// ~catch-->it is used to handle the rejection.syntax-->var.catch(err)

// let myPromise =new Promise((resolve,reject)=>{
//     console.log("I am inside a execution function");

// resolve("data is received")
//     reject("Data is not  received")
// })
// myPromise.then((data)=>{
// console.log(data);
// }).catch((err)=>{
//      console.log(err);//I am inside a execution function.Data is not  received

//  })


// ?2.modern approach-->(async and await)
// ~1.await and async-->it is a keyword.which is used to wait until the promise result.mandatory to use async funtion with await
// !to handle success and failure state we use try and catch
// let myPromise = new Promise((resolve, reject) => {
//     console.log("I am inside a execution function");

     // resolve("data is received")
//     reject("Data is not received")
// })
// console.log(myPromise);

// async function HandlingMyownPromise() {
//     try {
//         let result = await myPromise//I am inside a execution function,Promise { 'data is received' },data is received
//         console.log(result);
//     } catch (err) {   // am inside a execution function,Promise { <rejected> 'Data is not received' },Data is not received
//         console.log(err);

//     }


// }
// HandlingMyownPromise()

// & task to get the result for employeee login and login failed
// let thumbin=true
// let LoginPromise = new Promise((resolve, reject) => {
//     if (thumbin == true) {
//         resolve("employee logged in")
//     }
//     else {
//         reject("employee login failed")
//     }
// })
// // console.log(LoginPromise);

// async function HandlingLoginPromise() {
//     try {
//         let Login = await LoginPromise
//         console.log(Login);
//     } catch (err) {   
//         console.log(err)
//     }
// }
//     HandlingLoginPromise()


// !traditional way of handling callback hell by using promise
// function orderfood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Food is ordered");
//             resolve()

//         }, 2000);

//     })
// }

// function preparefood() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Food is prepared");
//             resolve()

//         }, 5000);
//     })
// }
// function payment() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Payment is done👍");
//             resolve()

//         }, 3000);
//     })
// }
// function takeAway() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Food is ready to takeAway");
//             resolve()

//         }, 4000);
//     })
// }
// orderfood().then(() => {
//     return preparefood()
// }).then(() => {
//     return payment()
// }).then(() => {
//     return takeAway()
// }).then(() => {
//     console.log("Enjoy your meal🍕🤗");
// })


// !modern approach to handle callbackhell using promise
function orderfood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is ordered");
            resolve()

        }, 2000);

    })
}

function preparefood() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is prepared");
            resolve()

        }, 5000);
    })
}
function payment() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment is done👍");
            resolve()

        }, 3000);
    })
}
function takeAway() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Food is ready to takeAway");
            resolve()

        }, 4000);
    })
}
 async function HandlingFood() {
    await orderfood()
    await preparefood()
    await payment()
    await takeAway()
    console.log("Enjoy your meal🍕🤗");
 }
 HandlingFood()
