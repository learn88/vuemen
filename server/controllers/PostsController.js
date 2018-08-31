const Post = require('../models/Post')

module.exports = {
  async index (req, res) {
    try {
      const posts = await Post.find()
      res.send(posts)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the posts'
      })
    }
  },
  async show (req, res) {
    try {
      const post = await Post.findById(req.params.postId)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to show the posts'
      })
    }
  },
  async post (req, res) {
    try {
      const post = await Post.create(req.body)
      res.send(post)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to create the post'
      })
    }
  },
  async put (req, res) {
    try {
      await Post.update(req.body, {
        where: {
          id: req.params.postId
        }
      })
      res.send(req.body)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to update the post'
      })
    }
  }
}
