const {Strategy} = require("passport-facebook")
    , User = require("./features/users/User")
    , config = require("./config");

module.exports = new Strategy({
    clientID: config.facebook.clientId,
    clientSecret: config.facebook.secret,
    callbackURL: config.facebook.cbUrl
  },
  (token, refreshToken, profile, done) => {
    process.nextTick(function() {
      console.log(profile)
      User.findOne({ 'facebook_id': profile.id }, function(err, user) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, user); // user found, return that user
        } else {
          var newUser = new User();
            newUser.facebook_id = profile.id;
            newUser.name  = profile.displayName;
            if (profile.email) newUser.email = profile.email[0].value;

            newUser.save(function(err) {
                if (err)
                    throw err;

                // if successful, return the new user
                return done(null, profile);

            });
        }
      });
    });

  });
