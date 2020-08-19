require('dotenv').config()

module.exports = {
    host: "smtp.gmail.com",
    port: 587,
    user:`${process.env.USER_GMAIL}`,
    pass:`${process.env.PASSWORD_GMAIL}`
}