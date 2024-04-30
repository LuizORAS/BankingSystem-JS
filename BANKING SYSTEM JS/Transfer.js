module.exports = class Transfer{
    constructor(senderUser, receiverUser, valueSent){
        this.senderUser = senderUser
        this. receiverUser = receiverUser
        this.valueSent = valueSent
        this.transferDate = new Date()
    }
}