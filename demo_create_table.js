const mysql = require("mysql");
const express = require("express");
const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect((err) => {
  if (err) throw err;
  const sql =
    "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, (error, result) => {
    if (err) throw err;
    console.log("Table created");
  });
});
