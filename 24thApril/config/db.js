const mysql = require("mysql2")

const pool = mysql.createPool({
    host:"localhost",
    user: "root",
    password: "luvhirani",
    database:"ecom"
})

module.exports = pool.promise()

