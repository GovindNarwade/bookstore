const bcrypt = require("bcryptjs")
const admin = [{
    Email:"admin@admin.com",
    Password:bcrypt.hashSync("password",10)
}]
 module.exports = admin