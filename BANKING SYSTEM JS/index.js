const App = require('./App.js')

App.createUser("isaac@email.com", "Isaac Pontes")
App.createUser("lucas@email.com", "Lucas Queiroga")
App.createUser("juliana@email.com", "Juliana Conde")

App.doDeposit("isaac@email.com", 100)

App.doTransfer("isaac@email.com", "lucas@email.com", 20)

App.changeInterest(10)
App.doLoan("juliana@email.com", 2000, 24)

console.log(App.getUser("isaac@email.com"))
console.log(App.getUser("isaac@email.com").account)
console.log(App.getUser("lucas@email.com"))
console.log(App.getUser("lucas@email.com").account)
console.log(App.getUser("juliana@email.com"))
console.log(App.getUser("juliana@email.com").account)
console.log(App.getUser("juliana@email.com").account.loans[0].installments)
