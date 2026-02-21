require('dotenv').config()
const app = require("./src/app");
const connectDB = require("./src/db/db");
console.log(__filename);
connectDB();

app.listen("3000", () => {
  console.log("Server Running On 3000");
});
