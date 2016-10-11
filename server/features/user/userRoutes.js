const userCtrl = require("./userCtrl")
    , passport = require("passport")
    , auth = require("../../middleware/auth");

module.exports = app => {
  app.get("/auth/facebook", passport.authenticate("facebook"));
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook",
    {successRedirect: "http://localhost:3000/#/user", failureRedirect: "http://localhost:3000/#/login"})
  );

  
}
