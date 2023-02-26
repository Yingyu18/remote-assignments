const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require('./db.js');
var moment = require('moment');
app.use(bodyParser.json());
app.use(express.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded



//post => sign up
app.post('/users', function (req, res, next) {

  const body = req.body;
  console.dir(body);
  console.dir(req.headers);
  
  //check input
  var rules = /[a-zA-Z0-9]*/;
  if(!rules.test(body.name)){ next();}
  else{ rules = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;}
  if(!rules.test(body.email)){ next();}
  else{}

  console.log(moment().format(("llll")));

  var sql = `INSERT INTO users (name, email, password, created) VALUES ("${body.name}", "${body.email}", "${body.password}", "${moment().format(("llll"))}")`;
  connection.query(sql, function (err, result) {
    if (err) {
        res.status(400).json({error:"internal server error"});
        throw err;
    }
    console.log("1 record inserted");}) 
    //res.send("OK");
});

//get => query
app.get('/users/:id', (req, response)=> { 
    const id = req.params.id;
    connection.query(`SELECT * FROM users WHERE id = ${id}`, function (err, result) {
        if (err){
        res.status(400).json({error:"internal server error"});
        throw err;}
        response.send(
        { 
            data:{
                user:{
                    id:    `${result[0].id}`,
                    name:  `${result[0].name}`,
                    email: `${result[0].email}`
                },
                date:result[0].created
            }
        }
        );
    });
} );
 
app.listen(3000,() => console.log('Server is running on port 3000'));
