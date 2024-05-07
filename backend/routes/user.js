const express = require("express");
const router = express.Router();
const { signin, signup, logout } = require("../controllers/user");

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/logout", logout);

module.exports = router;
