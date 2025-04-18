// producing code->that can take some time
// let data = fetch("https://jsonholder.typicode.com/users/1")

// consuming code->that must wait for the result
// .then(()=> console.log("data fetched successully"))
    // .then(data => data.json())
    // .then(user => {
    //     console.log("User name:", user.name);
    // })
    // .catch(error => console.log("Error:", error));



let orderPizza = new Promise((resolve, reject) => {
    let isShopOpen = true;
    
    if(isShopOpen){
        resolve("You can place order")
    }
    else{
        reject(console.log("we are closed"))
    }
})

.then(()=>{ console.log("what you want ?")} )
.catch(()=>{console.log("Sorry! ")})


// async/await

// async function placeOrder(isShopOpen) {
    
//     await 
// }


