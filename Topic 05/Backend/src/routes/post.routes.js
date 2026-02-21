const express=require('express')
const PostRouter=express.Router()
const jwt=require('jsonwebtoken')

PostRouter.post('/create',(req,res)=>{

    const token=req.cookies.meracookie
    
    if(!token){
        return res.status(401).json({
            message:"Unauthorized "
        })
    }

    

try {
    const decoded=jwt.verify(token,process.env.JWT_Secret)
    console.log(decoded)
    
} catch (error) {
    res.status(401).json({
        messsgae:"Token IsInvalid"
    })
     
}

   

})


module.exports=PostRouter;