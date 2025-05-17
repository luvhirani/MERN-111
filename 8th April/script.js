// function sum (){
//     return function multiply () {

//     }
// }


// let hof = function (a,b) {
//     return a+b
// }

// let callback = function (a,b) {
//     return a*b;
// }

// hof(callback())

// let hof = (a,b)=> {
//     return a+b
// }

// let callback =(a,b) => a*b;
// hof(callback())

// Higher order functions are functions that take functions as arguments and also return a function as a value.


// setInterval(function () { //anonymous function
//     console.log("This is setInterval")
// },2000)

// setTimeout(function (){
//     console.log("This is setTimeout")
// },2000)

var a = {} 

var b = {key:'b'}; 

var c = {key:'c'};

a[b]=123 

b[c]=456 
console.log(Object.entries(a))
console.log(a[b])

//Type Error -> Invalid
// setTimeout(setInterval(function () {
//     console.log("This is setTimeout")
// },1000),2000)

// function sum(a, ) {

// }

// sum (2,function () {
    
// })