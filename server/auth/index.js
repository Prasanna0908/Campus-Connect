const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');
const StreamChat = require('stream-chat').StreamChat

exports.createAuthToken = user => {
  return jwt.sign({ user }, config.jwt.secret, {
    expiresIn: config.jwt.expiry
  });
};

exports.login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).json(info);
    if(!user.confirmed){
      res.json({
        message:"Verify Email"
      })
    }

    // Define values. 
const api_key = '87e4fmr6sffp' 
const api_secret = 'vgjwy8ev6ybdf44kvc2m525anvztgbmesp94au87j2hgne5dqkt5eu4uc4wy9axr' 
console.log(user)
const user_id = user.id
 
// Initialize a Server Client 
const serverClient = StreamChat.getInstance( api_key, api_secret); 
// Create User Token 
const token2 = serverClient.createToken(user_id); 
console.log(token2)
    const token = this.createAuthToken(user);
    res.json({ token,  token2  });
  })(req, res);
};

exports.jwtAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user) => {
    if (err) return next(err);
    if (!user) return res.status(401).json({ message: 'unauthorized' });
    req.user = user;
    next();
  })(req, res);
};

exports.postAuth = (req, res, next) => {
  if (req.post.author._id.equals(req.user.id) || req.user.admin) return next();
  res.status(401).end();
};

exports.commentAuth = (req, res, next) => {
  if (
    req.comment.author._id.equals(req.user.id) ||
    req.post.author._id.equals(req.user.id) ||
    req.user.admin
  )
    return next();
  res.status(401).end();
};
