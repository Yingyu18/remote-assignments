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
  if(!rules.test(body.name)){ res.status(403).json({error:"invalid name"});}
  else{ rules = /[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/;
  if(!rules.test(body.email)){ res.status(403).json({error:"invalid email"});}
  else{rules = /[A-Za-z?.>,<‘”;:|=+-_)(*&^%$#@ !`~]{3,}/
  if (!rules.test(body.password)){ res.status(400).json({error:"invalid password"});}}}

  var sql = `INSERT INTO users (name, email, password, created) VALUES ("${body.name}", "${body.email}", "${body.password}", "${moment().format(("llll"))}")`;
  connection.query(sql, function (err, result) {
    if (err) {
        res.status(400).json({error:"internal server error"});
        throw err;
    }
    console.log("1 record inserted"); 
    connection.query(`SELECT * FROM users WHERE email ='${body.email}'`, function (err, results) {
    if(err) throw err;
    console.dir(results);
    res.send(
    {	
 	data:{
		user:{
			id:    results[0].id,
			name:  body.name,
			email: body.email
		},
		date:  req.headers['request-date']

	}

    }
    );})
  });
})
app.get('/healthcheck', (req, res)=>{
	res.send('OK');	
})
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
                date: req.headers['request-date']
            }
        }
        );
    });
} );
 
app.listen(3000,() => console.log('Server is running on port 3000'));
