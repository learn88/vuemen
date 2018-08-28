
var songs = require('./api/songs')
// import songs from './songs'
const AuthenticationController = require('../controllers/AuthenticationController')
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')
const isAuthenticated = require('../policies/isAuthenticated')

module.exports = (app) => {
  app.use('/api/v1/songs', isAuthenticated, songs),
  app.post('/api/v1/register', AuthenticationPolicy.register, AuthenticationController.register),
  app.post('/api/v1/login', AuthenticationController.login)
}
