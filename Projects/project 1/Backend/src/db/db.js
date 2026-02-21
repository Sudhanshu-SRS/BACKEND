const mongoose = require("mongoose");

async function ConnectDB() {
  await mongoose.connect(
    "mongodb+srv://sudhanshusakhare808_db_user:Sudhanshu2002@emi-cluster.wmppf5y.mongodb.net/Project-B",
  );
  console.log("Connected To DB");
}

module.exports = ConnectDB;
