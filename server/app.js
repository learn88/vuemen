const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
// const logger = require('morgan')
const config = require('./config/settings.conf')

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(express.static(__dirname+'../../'))
require('./routes')(app)
require('./config/passport.conf')

app.get('/', function(req, res){
	res.send('Please use /api/customers or /api/invoices')
})


app.listen(config.port)
console.log('Started on port 3000...')
