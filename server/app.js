const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// var mongoose = require('mongoose');
const config = require('../config/config');

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname+'../../'));
require('./routes')(app)

app.get('/', function(req, res){
	res.send('Please use /api/customers or /api/invoices');
});


app.listen(config.port);
console.log('Started on port 3000...');
