const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys')
const User = require('../models/users')
var pry = require('pryjs');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id)
    .then(user => {
      done(null, user.rows[0]);
    })
})


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      User.findByUid(profile.id).then(currentUser => {
        if (currentUser.rows[0]) {
          done(null, currentUser.rows[0]);
        } else {
          User.addUser(
            profile.id,
            profile.name.givenName,
            profile.name.familyName,
            profile.emails[0].value
          ).then(currentUser => {
            done(null, currentUser.rows[0])
          })

        }
      })
    }
  )
);
