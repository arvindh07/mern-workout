const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.signup = async function(email,password){
    const emailExists = await this.findOne({email});
    if(emailExists){
        throw Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hashedPassword});
    return user;
}

module.exports = mongoose.model("User",userSchema);