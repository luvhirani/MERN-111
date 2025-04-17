// const mathFunc = require("./script")
// console.log(mathFunc.sub(4,1))
// console.log(mathFunc.sum(2,2))

// const os = require("os")

// console.log(os.freemem())
// console.log(os.cpus())
// console.log(os.hostname())
// console.log(os.version())

const fs = require("fs")

// fs.writeFileSync("test.txt", "Hello, i am creating a new file")
// fs.writeFileSync("test.html", "Hello, i am creating a new HTML file")
// fs.appendFileSync("test.txt", "\nhjdcjkcdkjddsv")
// fs.unlinkSync("test.html")
let data = fs.readFileSync("test.txt","utf-8")
console.log(data)