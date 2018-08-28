const path = require('path');
// import path from 'path'
// import mongoose from 'mongoose'
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/vue-node');

module.exports = {
  port: process.env.PORT || 3000,
  // Mongoose Connect
  db : mongoose.connection,

  // db: {
  //   database: process.env.DB_NAME || 'tabtracker',
  //   user: process.env.DB_USER || 'tabtracker',
  //   password: process.env.DB_PASS || 'tabtracker',
  //   options: {
  //     dialect: process.env.DIALECT || 'sqlite',
  //     host: process.env.HOST || 'localhost',
  //     storage: path.resolve(__dirname, '../../tabtracker.sqlite')
  //   }
  // },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
