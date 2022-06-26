const url = "";

let dbparams = {
  host: "localhost",
  user: "root",
  password: "root",
  database: "WTP",
  port: 3306,
};

const mysql = require("mysql2");
const con = mysql.createConnection(dbparams);
console.log("connection created");