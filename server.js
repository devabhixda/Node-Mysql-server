const mysql = require('mysql');
const express=require('express');
const cors = require('cors');
var app=express();
const bodyparser=require('body-parser');

app.use(cors());
app.use(bodyparser.json());

//Establish connection with mysql
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "/*YourPassword*/",
  databse: "/*YourDatabaseName*/"
});

//Return connection status
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

//Define Port
app.listen(8080,()=>
console.log('Server started at port 8080')
);

//Define table
const table='/tasks';

//CREATE
app.post(table,(req,res)=>{
  let task=req.body;
  con.query("INSERT INTO todo.tasks SET ?",task,(err,rows,fields)=>{
  if(err) throw err;
  res.send(JSON.stringify(rows))
  })
})