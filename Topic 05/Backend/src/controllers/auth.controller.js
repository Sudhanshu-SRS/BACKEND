const UserModel = require('../models/User.model')
const jwt=require('jsonwebtoken')


async function registerUser(req,res){

    const {username,email,password}=req.body
     //test To Check If User With Same Email Exist
     const isUserAlreadyExist=await UserModel.findOne({email})

     if(isUserAlreadyExist){
        return res.status(409).json({
            message:"user Already Exist"
        })
     }

    const user= await UserModel.create({
        username,
        email,
        password,
    })
    const token=jwt.sign({id:user._id},process.env.JWT_Secret)

    res.cookie("meracookie",token)

    res.status(201).json({
        message:"user created Succesfully",
        user,
        
    })

}

module.exports={registerUser};