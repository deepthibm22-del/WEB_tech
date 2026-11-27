//~ callback hell or pyramid dom-->imp for interview.nothing but nested callbacks  to create a dependency we will be using callback
function orderfood(callback) {
    setTimeout(() => {
        console.log("Food is ordered");
        callback()
    }, 2000);
}
function preparefood(callback) {
    setTimeout(() => {
        console.log("Food is prepared");
        callback()
    }, 5000);
}
function payment(callback) {
    setTimeout(() => {
        console.log("Payment is done👍");
        callback()
    }, 3000);
}
function takeAway(callback) {
    setTimeout(() => {
        console.log("Food is ready to takeAway");
        callback()
    }, 4000);
}
orderfood(() => {
    preparefood(() => {
        payment(() => {
            takeAway(() => {
                console.log("Enjoy your food❤️🍟");
            })
        })

    })
})

