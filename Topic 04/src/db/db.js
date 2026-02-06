const mongoose =require('mongoose')

async function dbconnect(){
    await mongoose.connect('mongodb+srv://sudhanshusakhare808_db_user:Sudhanshu2002@emi-cluster.wmppf5y.mongodb.net/sudh')
    console.log("Db Connected");
}

module.exports=dbconnect;