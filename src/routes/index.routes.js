const { Router } = require("express");
const router = Router();

const { renderIndex, renderAbout } = require("../controllers/index.controller");
const { isNotAuthenticated } = require("../helpers/auth");

router.get("/", isNotAuthenticated, renderIndex);

router.get("/about", isNotAuthenticated, renderAbout);

module.exports = router;
