const mysql = require("mysql");
var connection;
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Pogo131433$",
  database: "university_db"
});



connection.connect();
module.exports = connection;
