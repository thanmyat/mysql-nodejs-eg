const mysql = require("mysql");
const express = require("express");

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "mydb",
});

con.connect((error) => {
  if (error) throw error;
  console.log("Connected!");
  var sql =
    "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
