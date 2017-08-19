const jwt = require('jwt-simple');
const User = require('../models/user');
const config = require('../config');

function tokenForUser(user) {
  const timeStamp = new Date().getTime();
  return jwt.encode({sub: user.id, iat: timeStamp}, config.secret);
}

exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;

  //if email or password not provided return unprocessable status and error
  if(!email || !password) return res.status(422).send({error: 'An email and password are both required.'})
  //see if user with email exists
  User.findOne({email: email}, function(err, existingUser) {
    //if error occured, pass into callback next
    if(err) return next(err);
    //if email exists, return unprocessable status and error
    if(existingUser) return res.status(422).send({error: 'Email is in use.'});

    //if email does not exist, create and save user
    const user = new User({
      email: email,
      password: password
    });
    user.save(function(err) {
      //after user is saved, check for errors
      if(err) return next(err);
      //if no errors, send jwt token
      res.json({token: tokenForUser(user)});
    });
  })
}

exports.signin = function(req,res,next) {
  //user has had email and pass authorized,
  //user needs token from here
  res.send({token: tokenForUser(req.user)});
}
