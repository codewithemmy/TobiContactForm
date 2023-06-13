const userRoute = require("express").Router()

const { userMessageController, getMessageController } = require("./user.controller")

//routes
userRoute.route("/").post(userMessageController)
userRoute.route("/").get(getMessageController)

module.exports = userRoute
