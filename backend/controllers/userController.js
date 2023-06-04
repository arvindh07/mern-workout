const User = require("../models/userModel")

const userLogin = (req,res) => {
    res.json({
        msg:"login successfull"
    })
}

const userSignup = async (req,res) => {
    const {email,password} = req.body;
    try {
        const user = await User.signup(email,password);
        res.status(200).json({
            email,
            user
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

module.exports = {userLogin,userSignup};