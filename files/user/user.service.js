const { User } = require("./user.model")
const { UserSuccess, UserFailure } = require("./user.messages")

class UserService {
  static async createMessage(payload) {
    const user = await User.create({ ...payload })

    if (!user) return { success: false, msg: UserFailure.CREATE }

    return {
      success: true,
      msg: UserSuccess.CREATE,
    }
  }

  static async getMessageService() {
    const user = await User.find().sort({ createdAt: -1 })

    if (!user) return { success: false, msg: UserFailure.FETCH }

    return {
      success: true,
      msg: UserSuccess.FETCH,
      data: user,
    }
  }
}
module.exports = { UserService }
