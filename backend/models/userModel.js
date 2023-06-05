const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

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
    if(!email || !password){
        throw Error("All fields must be filled");
    }
    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }
    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough");
    }
    const emailExists = await this.findOne({email});
    if(emailExists){
        throw Error("User already exists");
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const user = await this.create({email,password:hashedPassword});
    return user;
}

// login static method
userSchema.statics.login = async function(email,password){
    if(!email || !password){
        throw Error("All fields must be filled");
    }

    const user = await this.findOne({email});
    if(!user){
        throw Error("Incorrect email");
    }

    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
        throw Error("Incorrect password");
    }

    return user;
}

module.exports = mongoose.model("User",userSchema);