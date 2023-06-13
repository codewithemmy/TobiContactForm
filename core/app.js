const { handleApplicationErrors, notFound } = require("./response")

const express = require("express")
const cors = require("cors")

const routes = require("./routes")

const app = express()

const application = () => {
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())

  routes(app)
  app.get("/", (req, res) => {
    res.status(200).json({ message: "working fine" })
  })

  app.use(handleApplicationErrors) //application errors handler
  app.use(notFound)
}

module.exports = { app, application }
