const helpers = {};

helpers.isAuthenticated = (req, res, next) => {
	if (req.isAuthenticated()) {
		return next();
	}
	req.flash("error_msg", "Not authorized");
	res.redirect("/users/signin");
};

helpers.isNotAuthenticated = (req, res, next) => {
	if (!req.isAuthenticated()) {
		return next();
	}

	res.redirect("/notes");
};

module.exports = helpers;
