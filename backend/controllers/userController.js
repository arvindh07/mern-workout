const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
    return jwt.sign({_id},process.env.SECRET,{expiresIn:"2d"});
}


const userLogin = (req,res) => {
    res.json({
        msg:"login successfull"
    })
}

const userSignup = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.signup(email,password);
        const token = createToken(user._id);
        res.status(200).json({
            email,
            token
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {userLogin,userSignup};