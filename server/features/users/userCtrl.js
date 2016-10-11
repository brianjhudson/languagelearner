const User = require("./User");

module.exports = {
	getAuthUser(req, res) {
    if (!req.user) {
      return res.send(null);
    }
    User.findById(req.user._id, (err, user) => {
      return res.send(user)
    })
	}
};
