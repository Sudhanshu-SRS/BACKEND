const express = require('express');
const notemodel=require('./models/note.model')

const app =express()
app.use(express.json())


//To MAke Notes
app.post('/notes',async(req,res)=>{
    const data=req.body;
   await notemodel.create({
        title:data.title,
        discription:data.discription,
    })

    res.status(201).json({
        message:"Notes Created Successfully",
    })

})
//To Fect All Notes it return array of object
app.get('/notes',async(req,res)=>{
    const note=await notemodel.find()
    
    res.status(201).json({
        message:"All Notes Fetched",
        note:note,
    })
})
//To Fetch The required Notes We USe FInd One Which Give us Object
app.get("/note",async (req,res) => {

const note=await notemodel.findOne({
    title:"hello2"

})
res.status(201).json({
    message:"Note Fetched Succesfully",
    note,
})
    
})

//To Delete 
app.delete("/notes/:id",async (req,res) => {

    const id=req.params.id
    await notemodel.findOneAndDelete({
        _id:id,
    })
    res.status(201).json({
        message:"Note Deleted Succesfully From Db"
    })
})

//To Update
app.patch("/notes/:id",async(req,res)=>{
    const id=req.params.id
    const discription=req.body.discription
    await notemodel.findOneAndUpdate({
        _id:id
    },{
        discription:discription,
    })
    res.status(201).json({
        message:"Note Updated Succesfully"
    })
})

module.exports=app