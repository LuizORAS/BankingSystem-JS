const Deposit = require('./Deposit.js')
const Loan = require('./Loan.js')
const Transfer = require('./Transfer.js')
module.exports = class Account {
    #balance = 0
    deposits = []
    loans = []
    transfers = []

    constructor(user){
        this.user = user
        this.deposits = this.deposits
        this.loans = this.loans
        this.transfers = this.transfers
    }
    doDeposit(deposit){
        this.#balance += deposit.value
        this.deposits.push(deposit)
    }
    doLoan(loan){
        this.#balance += loan.loanAmount
        this.loans.push(loan)
    }
    doTransfer(transfer){
        if(transfer.receiverUser.email === this.user.email){
            this.#balance += transfer.valueSent
            this.transfers.push(transfer)
        }else if(transfer.senderUser.email === this.user.email){
            this.#balance -= transfer.valueSent
            this.transfers.push(transfer) 
        }
    }
}