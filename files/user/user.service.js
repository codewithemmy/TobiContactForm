const { User } = require("./user.model")
const { UserSuccess, UserFailure } = require("./user.messages")
const { sendMailNotification } = require("../../utils/email")

class UserService {
  static async createMessage(payload) {
    const { email, phone, message } = payload
    const user = await User.create({ ...payload })

    if (!user) return { success: false, msg: UserFailure.CREATE }

    // /**send otp to email or phone number*/
    const substitutional_parameters = {
      email: email,
      phone: phone,
      message: message,
    }

    const newEmail = "emmyoptions@gmail.com"

    try {
      await sendMailNotification(
        newEmail,
        "Portfolio Contact Message",
        substitutional_parameters,
        "portfolio"
      )
    } catch (error) {
      console.log("error", error)
    }
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
