const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const keys = require('../config/keys')
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
      clientID: process.env.googleClientID,
      clientSecret: process.env.googleClientSecret,
      // clientID: keys.googleClientID,
      // clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const currentUser = await User.findByUid(profile.id)
        if (currentUser.rows[0]) {
          return done(null, currentUser.rows[0]);
        }
        const user = await User.addUser(
          profile.id,
          profile.name.givenName,
          profile.name.familyName,
          profile.emails[0].value
        )
          done(null, currentUser.rows[0])
    })
);
