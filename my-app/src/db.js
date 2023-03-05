const mysql = require('mysql2');
const connection = mysql.createConnection({
    host:"database-1.c8gwdesey8ij.ap-northeast-1.rds.amazonaws.com", 
    user: "r11922140", 
    password: "aa880718",
    database: "assignment", 
    port: 3306});

    //connetc 1
    connection.connect(function(err) {
        if (err) throw err;
        console.log('Database is connected successfully !');
      });

module.exports = connection;