const Deposit = require("./Deposit.js")
const Loan = require("./Loan.js")
const Transfer = require("./Transfer.js")
const User = require("./User.js")

module.exports = class App {
    
    static #users = []

    static getUser(email){
        const user = this.#users.find(user => user.email === email) 
        return user??null
    }
    static createUser(name, email, password){
        const userExists = App.getUser(email)
        if (!userExists) {
          this.#users.push(new User(email, name, password))
        }
    }
    static doDeposit(email, value){
        const user = App.getUser(email)
        if(user){
            const newDeposit = new Deposit(value)
            user.account.doDeposit(newDeposit)
        }
    }
    static doTransfer(senderEmail, receiverEmail, value ){
        const sender = App.getUser(senderEmail)
        const receiver = App.getUser(receiverEmail)
        if(sender && receiver){
            const newTransfer = new Transfer(sender, receiver, value)
            sender.account.doTransfer(newTransfer)
            receiver.account.doTransfer(newTransfer)
        }
    }
    static doLoan(email, loan, installments){
        const user = App.getUser(email)
        if(user){
            const newLoan = new Loan(loan, installments)
            user.account.doLoan(newLoan)
        }
    }
    static changeInterest (percentage){
        Loan.changeInterest = percentage
    }

}