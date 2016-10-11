const User = require("./User");

module.exports = {
	getAuthUser(req, res) {
    if (!req.user) {
      return res.send(null);
    }
    return res.send(req.user)
	},
};
