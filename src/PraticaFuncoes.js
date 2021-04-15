// Constructor Function recieving three parameters, name, id and amount
function ContaBancaria(name, id, amount) {
    this.name = name 
    this.id = id 
    this.amount = amount 

    /*
        The Constructor Function has three methods, one for deposit money on the account, another for
        withdraw money on the account and another one to see the info about the account
    */
    this.deposit = (money) => {
        this.amount += money
    }

    this.withdraw = (money) => {
        if(this.amount >= money) {
            this.amount -= money
            return true
        }else {
            return false
        }
    }

    this.seeInfo = () => {
        console.log("==== Information about the acount: ====")
        console.log(`Name: ${this.name}`)
        console.log(`Account Id: ${this.id}`)
        console.log(`Amount: R$ ${this.amount}\n`)
    }
}

// An array of objects account
let arrayContas = []

const contaWilliam = new ContaBancaria("William", 2345, 2000)
const contaYann = new ContaBancaria("Yann", 1357, 4000)
const contaMarcos = new ContaBancaria("Marcos", 4680, 3500)

arrayContas.push(contaWilliam)
arrayContas.push(contaYann)
arrayContas.push(contaMarcos)

for(let i = 0; i < 3; i++){
    arrayContas[i].seeInfo()
}
