// function greeting (salutation="afternoon", firstName, lastName, wel) {
//     console.log(salutation,firstName,lastName,wel)
    // return function 
// }


// greeting( "rahul", "verma", "welcome")

// let cart = ["jeans", "shoes", "shirt"]

// console.log("data")

// function orderSummary(cart) {
//     return totalAmount;
// }

// function paymentMethod(totalAmount){
//     if(payment= true){
//         console.log("order placed")
//         return id
//     }
//     else{
//         return "order failed"
//     }

// }

// function productsTrack(id){
//     return "location"
// }

//function pass
api.orderSummary(cart , function (amount){

    api.paymentMethod(function(paymentInfo){

        api.productsTrack(function (orderID){

            cancelOrder(function(teckID){
    
            })
        })
    })
})

let promise = orderSummary(cart){

}

//function attach
promise.then(paymentMethod(){

})

let data = new Promise((resolve,reject)=>{

})

resolve()
reject()


// console.log("hello")

// console.log("timer")
// setTimeout(function (){
//     console.log("timer")
// },5000)

console.log("world")

let user = fetch("https://api.github.com/users/luvhirani")
console.log(user)

// Using Promises (.then)

// producing code->that can take some time
fetch("https://jsonplaceholder.typicode.com/users/1")
// consuming code->that must wait for the result
    .then(response => response.json())
    .then(user => {
        console.log("User name:", user.name);
    })
    .catch(error => console.log("Error:", error));


// Using async/await
// async function getUserData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         const user = await response.json();
//         console.log("User name:", user.name);
//     } catch (error) {
//         console.log("Error:", error);
//     }
// }
// getUserData();