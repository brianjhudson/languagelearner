const express = require("express")
    , config = require("./server/config")
    , app = express()
    , port = process.env.PORT || 3000;

// JSON and Session
const {json} = require("body-parser")
    , session = require("express-session");
app.use(json());
app.use(express.static(`${__dirname}/public`));
app.use(session({secret: config.session.secret}));

// Passport
const passport = require("passport")
    , strategy = require("./server/facebookStrategy");
app.use(passport.initialize());
app.use(passport.session());
passport.use(strategy);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));


// Mongoose
const mongoose = require("mongoose");
mongoose.connect(config.database.mongoUri);
mongoose.connection.once("open", () => console.log(`Connected to MongoDB at ${config.database.mongoUri}`));

//Routes
require("./server/masterRoutes")(app);

app.listen(port, () => console.log(`Listening on port ${port}`));
