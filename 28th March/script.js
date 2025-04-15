// console.log("This is our first Javascript code in browser")

// console.log(student[0])
// console.log(student[1])
// console.log(student[2])

// console.log(student.length)

// let stu = [];
// stu[0] = "Ravi";
// stu[1] = "Raghav"
// console.log(stu)


// student.push("yogesh")
// student.pop()
// student.shift()
// student.unshift("yogesh")

// console.log(student)


// let num = ["3","1", "34", "2"]
// console.log(num.sort())

// console.log(student.at(5))
// console.log(student.indexOf("Divya"))
// console.log(student.includes("Rahul Verma"))

const student = ["Raghav","Ayush","Rahul","Divy","Divya","yogesh"];
// for (let i of student) {
//     console.log(i)
// }

// for (let z in student){
//     console.log(z)
// }

// let arr = student.slice(2,5)
// console.log(arr)

let arr = student.splice(2,0,"Ravi")
console.log(arr)
console.log(student)

