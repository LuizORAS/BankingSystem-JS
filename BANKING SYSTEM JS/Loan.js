module.exports = class Loan {
    static #interestRate = 1.35

    constructor(loanAmount, installments){
        this.loanAmount = loanAmount
        this.creationDate = new Date()
        this.installments = installments
        this.installAmount = Number(((this.loanAmount / this.installments) * Loan.interest).toFixed(2))
    }
    
    static get interest(){
        return this.#interestRate 
    }

    static set changeInterest(percentage){
        //a taxa de juros acima (#interestRate) tem que ser um valor entre 0 e 1 para ser em porcentagem e ao ano (a.a)
        this.#interestRate = 1+(percentage/100) 
    }
    
    
}
