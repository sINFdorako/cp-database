const sqlite3 = require('sqlite3').verbose();
const express = require('express');
const app = express();
const bp = require('body-parser');
app.use(bp.json());


// open the database
let db = new sqlite3.Database('./citypedia.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the citypedia database.');
});

//add 'Access-Control-Allow-Origin'-ResponseHeader to every get request
app.get('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin', '*');
    console.log("hallo!");
    res.end();
});




app.listen(3000, function (){console.log("Port:3000")});
