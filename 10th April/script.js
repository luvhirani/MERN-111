// //Temporal Dead Zone

// console.log(a)
// console.log("one")
// console.log("two")
// const a = 10;

console.log("start")

setTimeout(()=>{
    const url = fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log(url)
},3000)


console.log("end")