const { Router } = require("express");
const router = Router();

const {
	renderSignupForm,
	signup,
	renderSigninForm,
	signin,
	logout,
} = require("../controllers/users.controller");

// New user
router.get("/users/signup", renderSignupForm);
router.post("/users/signup", signup);

// Login users
router.get("/users/signin", renderSigninForm);
router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;
