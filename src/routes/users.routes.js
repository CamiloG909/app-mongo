const { Router } = require("express");
const router = Router();

const {
	renderSignupForm,
	signup,
	renderSigninForm,
	signin,
	logout,
} = require("../controllers/users.controller");

const { isNotAuthenticated } = require("../helpers/auth");

// New user
router.get("/users/signup", isNotAuthenticated, renderSignupForm);
router.post("/users/signup", isNotAuthenticated, signup);

// Login users
router.get("/users/signin", isNotAuthenticated, renderSigninForm);
router.post("/users/signin", isNotAuthenticated, signin);

router.get("/users/logout", logout);

module.exports = router;
