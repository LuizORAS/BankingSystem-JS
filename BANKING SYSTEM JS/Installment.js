const Loan = require('./Loan.js')

module.exports = class Installment extends Loan {
    
    constructor(loanAmount, installments){
        super(loanAmount, installments)
        this.creationDate = new Date ()
        this.installAmount = Number(((this.loanAmount / this.installments) * Loan.interest).toFixed(2))
        this.paid = false
    }
}

