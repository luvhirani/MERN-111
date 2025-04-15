// let num = [1,2,3,4,5]

// num.forEach( val => {
//     console.log(val*val)
// }
// )

// num.forEach((Number, index) => {
//     console.log("Index:"+ index+" "+ "Number:"+ Number)
// })

// let num = [10,20,30,40,50]

// let arr= num.map((brr) => {
//     return brr*brr;
// })

// console.log(arr)

// num.map(val => {
//     console.log(val*3)
// })


// let num = [1,12,31,47,68,70]

// let brr = num.filter((number) => {
//     return number%2==0;
// })
// console.log(brr)

let num = [1,2,3,4,5]

let brr = num.reduce((acc,curr)=>{
    return acc+curr;
},5)

console.log(brr)

let b = "1" + 1 
let c = 1 +"1" 
let d = "hello" + 23;
let e = 1 + 1 + "1";
let f = "1" + 1 + 1;