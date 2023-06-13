const dotenv = require("dotenv")
const path = require("path")
dotenv.config({ path: path.join(__dirname, "../.env") })

module.exports.config = {
  PORT: process.env.PORT,
  MONGO_URL: process.env.MONGO_URL,
}
