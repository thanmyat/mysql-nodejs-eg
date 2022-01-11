const mysql = require("mysql");
const bodyparser = require("body-parser");
const express = require("express");
const app = express();

app.use(bodyparser.json());
var mySqlConnection = mysql.createConnection({
  name: "db-baseground",
  host: "localhost",
  user: "root",
  password: "{0mySQL}",
  database: "employeedb",
});

// mySqlConnection.connect((err) => {
//   if (!err) {
//     console.log("DB connection success");
//   } else
//     console.log(
//       "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
//     );
// });

app.listen(4000, () =>
  console.log("Express server is running at port no : 4000")
);

app.get("/", (req, res) => {
  console.log("getApi");
  res.send("hello");
});
app.get("/employees", (req, res) => {
  mySqlConnection.connect((error) => {
    if (!error) {
      mySqlConnection.query("SELECT * FROM employee", (err, result) => {
        if (result) {
          res.send("result", result);
        }
        res.send("error", err);
      });
    } else {
      console.log(
        "DB connection failed \n Error : " + JSON.stringify(err, undefined, 2)
      );
    }
  });
});

// mySqlConnection.end();
