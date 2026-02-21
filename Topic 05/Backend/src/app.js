const express=require('express')
const authroutes =require('../src/routes/auth.routes')
const cookieparser=require('cookie-parser')
const Postroute =require('../src/routes/post.routes')


const app =express()
app.use(express.json())
app.use(cookieparser())
app.use('/api/auth',authroutes)
app.use('/api/post',Postroute)



module.exports=app;