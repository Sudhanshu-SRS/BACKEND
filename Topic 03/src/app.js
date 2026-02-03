const express=require('express')

const app=express()
app.use(express.json())
const notes=[]

app.post("/notes",(req,res)=>{
    notes.push(req.body);

    res.status(201).json({
        message:"NOTES CREATED SUCCESFULLY"
    })
})


app.get('/notes',(req,res)=>{
    res.status(200).json({
        message:"Fetched All Notes Succesfully",
        notes:notes,
    })
})

app.delete('/notes/:id',(req,res)=>{
    const id=req.params.id;
    delete notes[id];
    res.status(200).json({
        message:"Deleted  Successfully "
    })
})

app.patch('/notes/:id',(req,res)=>{
    const index=req.params.id;
    const discre=req.body.kahnd;
    notes[index].kahnd=discre
    res.status(200).json({
        message:"updated succesfully"
    })
})

module.exports=app