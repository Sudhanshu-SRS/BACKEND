const express = require("express");
const multer =require("multer")
const uploadimage=require("./service/imagekit.storage")
const postmodel=require("./models/post.model")
const app = express();
const cors=require("cors")
app.use(cors())
app.use(express.json());

const upload=multer({storage:multer.memoryStorage()})



app.post("/create-post", upload.single("image"),async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);
  const result= await uploadimage(req.file.buffer)
  
  const post=await postmodel.create({
    image:result.url,
    caption:req.body.caption,
    fileId:result.fileId,
  })
 

  res.status(201).json(
    {
      message:"image uploaded succesfully",post
    }
  )
});

app.delete('/postdelete',async (req,res)=>{

})
app.get('/posts',async(req,res)=>{
  const fetcpost=await postmodel.find()

return res.status(200).json({
  message: "All Post Fetched",
  posts: fetcpost
})
})




module.exports = app;
