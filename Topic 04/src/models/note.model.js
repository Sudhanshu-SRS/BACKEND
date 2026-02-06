const mongose =require('mongoose')

const noteschema=new mongose.Schema({
    title:String,
    discription:String,
})

const notemodel=mongose.model('notes',noteschema)

module.exports=notemodel;