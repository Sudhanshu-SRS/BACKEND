const mongoose = require('mongoose')


async function ConnectToDB() {

    try {
        await mongoose.connect(process.env.MONOGO_URI)
    console.log("Connected To Database")
    } catch (error) {
        console.log("Error in Conneting to Db",error)
    }
    
}

module.exports=ConnectToDB;