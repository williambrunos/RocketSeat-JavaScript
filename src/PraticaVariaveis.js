// var x => hoisting

console.log(`X existe?${x}`)

{
    // x = 3 => var é instância global
    var x = 3
    console.log(`X existe?${x}`)

}

console.log(`X existe?${x}`)

// Declaration => declaração
let X

// Assignment => Inicialização / Atribuição
X = 12

// Tipo de dado => typeof(variable)
console.log(typeof(X))

// Multiple declarations and assignments
let nome = 'William', age = 18, isHuman = true

// Múltiplas variáveis em um console.log com `` (interpolação de variáveis) => `texto ${variável} texto`
// `` => template literals
console.log(`Name: ${nome} \nAge: ${age} \nIs Human? ${isHuman} \n`)

// Muito feio, muita concatenação
console.log("O " + nome + " possui " + age + " anos ")

// Object

let object = {
    nome: "William",
    idade: 18,
    weigth: 55,
    isAdmin : true,
    contato: [
        88998577981,
        "williambruno@alu.ufc.br",
    ]
}

console.log(object.nome)
console.log(object.idade)
console.log(object.contato)

// Arrays => em js, arrays podem ter dados dos mais diversos tipos => Acesso por indexação
// Arrays são objetos => Possuem métodos e atributos
// Variáveis que guardam um endereço de memória que aponta para a primeira posição do aray => Acesso às demais

// Chaves {} declaram objetos => var objeto = { chave: valor, chave: valor, }
// Colchetes [] declaram arrays => var array = [ valor, valor]
const array = [
    firstPerson = {
        firstName: "William",
        firstAge: 18,
    },

    secondPerson = {
        secondName: "Luis Manuel",
        secondAge: 9,
    },
]   

console.log(array)
console.log(array[1].secondName)

// EXERCÍCIOS

var weight

console.log(typeof weight)

const student = {
    name: 'William', 
    age: 18,
    weight: 55,
}

console.log(`O estudante ${student.name}, de idade ${student.age} pesa ${student.weight} Kg`)

const studentsArray = [student]
console.log(typeof studentsArray)
// O método push adiciona um valor ao array na última posição(-1)
studentsArray.push(student)
console.log(studentsArray)
console.log(studentsArray[0])

// Var é de escopo global => é declarada no ínicio do programa, mas não inicializada => hoisting => undefined
console.log(a)
var a = 1 