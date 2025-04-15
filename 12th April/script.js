// console.log("start")

// let getData = async ()=>{
//     const p = new Promise ((resolve),setTimeout(()=> {
//         console.log("Output")
//     },2000)
// )
// resolve()
// reject()
// p()
    // let data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    // console.log(data)
// }
// getData()
// console.log(getData())

// console.log("End")



async function getUserData() {
    try{
      console.log("Start")
        const response = await fetch("https://jsonplaceholder.typicode.com/users/2");
        const user = await response.json();
        console.log("User name:", user.name);
      console.log("End")
    }

catch{
 console.log("failed")
}
}
getUserData();

// console.log("2")




