const users = require('./controllers/users');
const posts = require('./controllers/posts');
const User = require('./models/user')
const comments = require('./controllers/comments');
const { jwtAuth, postAuth, commentAuth } = require('./auth');
const router = require('express').Router();
const jwt = require("jsonwebtoken");

router.post('/login', users.validate(), users.login);
router.post('/register', users.validate('register'), users.register);
router.get('/confirmation/:token', async(req, res) => {
  try{
    console.log(req.params.token)
    const user = jwt.verify(req.params.token,'%C&F)J@NcRfUjXn2r5u8x/A?D(G-KaPdSgVkYp3s6v9y$B&E)H@MbQeThWmZq4t7' )
    const task = await User.findOneAndUpdate({ username:user.user}, {confirmed:"true"}, {
      new: true,
      runValidators: true,
    })
    console.log(task)
    res.status(400).json(task);
    
  } catch(e) {
    console.log(e)
  }
})

router.param('post', posts.load);
router.get('/posts', posts.list);
router.get('/posts/:category', posts.listByCategory);
router.get('/post/:post', posts.show);
router.post('/posts', [jwtAuth, posts.validate], posts.create);
router.delete('/post/:post', [jwtAuth, postAuth], posts.destroy);
router.get('/post/:post/upvote', jwtAuth, posts.upvote);
router.get('/post/:post/downvote', jwtAuth, posts.downvote);
router.get('/post/:post/unvote', jwtAuth, posts.unvote);
router.get('/user/:user', posts.listByUser);

router.param('comment', comments.load);
router.post('/post/:post', [jwtAuth, comments.validate], comments.create);
router.delete('/post/:post/:comment', [jwtAuth, commentAuth], comments.destroy);

module.exports = app => {
  app.use('/api', router);

  app.get('*', (req, res) => {
    res.status(404).json({ message: 'not found' });
  });

  app.use((err, req, res, next) => {
    if (err.type === 'entity.parse.failed') {
      return res.status(400).json({ message: 'bad request' });
    }
    next(err);
  });
};
