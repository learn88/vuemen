
const AuthenticationController = require('../controllers/AuthenticationController')
const PostsController = require('../controllers/PostsController')
const AuthenticationPolicy = require('../policies/AuthenticationPolicy')
// isAuthenticated
const isAuthenticated = require('../policies/isAuthenticated')


module.exports = (app) => {
  app.post('/register', AuthenticationPolicy.register, AuthenticationController.register),
  app.post('/login', AuthenticationController.login)
  app.get('/posts', PostsController.index)
  app.get('/posts/:postId', PostsController.show)
  app.put('/posts/:postId', PostsController.put)
  app.post('/posts', PostsController.post)
}
