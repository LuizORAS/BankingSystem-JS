const Account = require('./Account.js')
module.exports = class User {
    constructor(name, email, password){
        this.name = name
        this.email = email
        this.password = password
        this.account = new Account(this)
    }
}