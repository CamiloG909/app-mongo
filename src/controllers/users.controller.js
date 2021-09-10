const usersController = {};

usersController.renderSignupForm = (req, res) => {
	res.render("user/signup");
};

usersController.signup = async (req, res) => {
	let errors = [];
	const { name, email, password, confirm_password } = req.body;
	if (password != confirm_password) {
		errors.push({ text: "Passwords do not match." });
	}
	if (password.length < 4) {
		errors.push({ text: "Passwords must be at least 4 characters." });
	}
	if (errors.length > 0) {
		res.render("user/signup", {
			errors,
			name,
			email,
			password,
		});
	} else {
		// Look for email coincidence
		const emailUser = await User.findOne({ email: email });
		if (emailUser) {
			req.flash("error_msg", "The Email is already in use.");
			res.redirect("/users/signup");
		} else {
			// Saving a New User
			const newUser = new User({ name, email, password });
			newUser.password = await newUser.encryptPassword(password);
			await newUser.save();
			req.flash("success_msg", "You are registered.");
			res.redirect("/users/signin");
		}
	}
};

usersController.renderSigninForm = (req, res) => {
	res.render("user/signin");
};

usersController.signin = (req, res) => {
	res.send("signin");
};

usersController.logout = (req, res) => {
	res.send("logout");
};

module.exports = usersController;
