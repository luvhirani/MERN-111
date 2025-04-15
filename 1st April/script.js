//Object Creation
//1. Object Literal
const car = {
    carName : "GWagon",
    color : "Blue",
    model: "G63",
    engine : "V12",
}

// console.log(car.carName)
// console.log(car["model"])
// delete car.engine;
// console.log(car)

// let car = {} 
//2. Object Constructor
// const student = new Object()
// console.log(typeof student)

//Object Access
// console.log(car.engine)

// let student = {}
// student.studentName = "Divy";
// student.age= 20;
// console.log(student)

//nested object
// const cars = {
//     carName : "GWagon",
//     color : "Blue",
//     model: "G63",
//     engine : "V12",
//     car2 : {
//         carName : "Tiago",
//         color : "White",
//         carNumber: "RJ14GFDJ",
//     }
// }    
// console.log(cars.color)

//Object Methods
const student = {
    firstName : "Raghav",
    lastName : "Mishra",
    age: 20,
    fullName : function() {
        console.log(this.firstName+" "+this.lastName)
    }
}

student.firstName = "Yogesh"
console.log(student.fullName)


