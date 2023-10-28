const { BAD_REQUEST, SUCCESS } = require("../../constants/statusCode")
const { responseHandler } = require("../../core/response")
const { manageAsyncOps } = require("../../utils")
const { CustomError } = require("../../utils/errors")
const { UserService } = require("./user.service")

const userMessageController = async (req, res, next) => {
  const [error, data] = await manageAsyncOps(
    UserService.createMessage(req.body)
  )
  console.log("error", error)
  if (error) return next(error)

  if (!data.success) return next(new CustomError(data.msg, BAD_REQUEST, data))

  return responseHandler(res, SUCCESS, data)
}
const getMessageController = async (req, res, next) => {
  const [error, data] = await manageAsyncOps(UserService.getMessageService())

  if (error) return next(error)

  if (!data.success) return next(new CustomError(data.msg, BAD_REQUEST, data))

  return responseHandler(res, SUCCESS, data)
}

module.exports = {
  userMessageController,
  getMessageController,
}
