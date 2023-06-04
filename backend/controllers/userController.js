const userLogin = (req,res) => {
    res.json({
        msg:"login successfull"
    })
}

const userSignup = (req,res) => {
    res.json({
        msg:"signup successfull"
    })
}

module.exports = {userLogin,userSignup};