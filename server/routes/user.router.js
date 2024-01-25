const express = require("express");
const { handleUserSignup, handleUserSignin } = require("../controllers/user.controller");
const router = express.Router();

router.post("/signup",handleUserSignup)
router.get("/signin",handleUserSignin)

module.exports = router;