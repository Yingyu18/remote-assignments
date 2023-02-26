
const express = require("express");
const bodyParser = require('body-parser');
const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));





// query example
    connection.query(
        'SELECT * FROM `table` WHERE `name` = "Page" AND `age` > 45',
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
        }
      );

//1. TODO:POST
//get request  
// query to 
//connect2
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO users (id, name, email) VALUES ('Company Inc', 'Highway 37')";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });



//2. TODO:GET

    



