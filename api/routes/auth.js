const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const requireAuthorizedUser = require('../middleware/requireAuthorizedUser');

const router = express.Router();

function whitelistUser({ email }) {
    return { email };
}

// Sign in
router.post('/signin',
    passport.authenticate('local', { failWithError: true }),
    function(req, res) {
        const { user } = req
        const token = jwt.sign({
            user: whitelistUser(user)
        }, process.env.TOKEN_SECRET, {
            subject: user._id.toString(),
            expiresIn: '5 days'
        });
        res.json({
            token//,
            //user: whitelistUser(req.user)
        });
    }
);

// Get current user’s info
router.get('/',
    requireAuthorizedUser,
    function(req, res) {
        const { user } = req;
        if (user) {
            res.json(whitelistUser(user));
        }
        else {
            res.status(401).json({ message: 'Please sign in' });
        }
    }
);

// Sign up
router.post('/register', function(req, res, next) {
  const { email, password } = req.body;
  User.register(
      new User({ email: email }),
      password,
      (error) => {
          if (error) {
              next(error);
          }
          else {
              res.json({
                  success: true
              });
          }
      }
  );
});

// Sign out
router.post('/signout', function(req, res) {
  req.logout();
  res.json({
      success: true
  });
});

module.exports = router;
