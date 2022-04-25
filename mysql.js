var mysql = require('mysql');

var con = mysql.createConnection({
  host: "http://54.80.237.233",
  user: "root",
  password: "12345678"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});