const express = require("express");
const router = express.Router();
const {userLogin,userSignup} = require("../controllers/userController");

// login
router.post("/login",userLogin);

// signup
router.post("/signup",userSignup);

module.exports = router;
