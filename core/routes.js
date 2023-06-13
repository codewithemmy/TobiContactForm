const userRoute = require("../files/user/user.route")

const routes = (app) => {
  const base_url = "/api/v1"
  app.use(`${base_url}/message`, userRoute)
}

module.exports = routes
