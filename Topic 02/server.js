const express=require('express')
const app=express();

app.get("/",(req,res)=>{
    res.send("welcome On Home")
})

app.get("/about",(req,res)=>{
    res.send("About Page")
})

app.listen(3000,()=>{
    console.log("Server Running On 3000");
})