/*  Function Statement - Declaração de função:

    function name(parameters) {
        code
        .
        .
        .
        return variable
    }    

    Funtion invoque - Invocar a função:

    name(args)
*/

/* 
    Por quê funções? 
    - Separação das responsabilidades do código => Dar significado ao código.
    - Evita a repetição desnecessária de código => Reutilização de código.
    - Abstração de procedimentos => Talvez o mais importante.
*/

var name = "william"

// Ele dará maior atenção a variável name criada como argumento da função, mesmo que var seja de escopo global
function sayHello(name) {
    console.log(`Hello, ${name}!`)
}

// a variável name é criada, mas sem conteúdo
sayHello()

// a variável name é criada com a string "william" como conteúdo
sayHello(name)

// Para funções declradas explicitamente, podemos criar variáveis com seus nomes livremente
var sayHello = "Hello!"
console.log(sayHello)


// Anonymous function || Function Expression
// Parameters => Local Variables
const sum = function(num1, num2){
    // O retorno é importante para que o resultado processado seja utilizado da forma que o programador bem entender
    // Sem a palavra chave "return" => Função retorn "undefined"
    return num1 + num2
}

// Arguments
// Variável não pode ter o mesmo nome da função anônima
var soma = sum(2, 3)
console.log(soma)

/*  
    Se temos uma variável com certo nome fora do escopo da função e criamos uma função com uma Variável
    com o mesmo nome, sem identificador de tipo(var, let ou const), da anterior sem recebê-la como parêmetro, qualquer modificação feita nessa variável acarretará na modificação da anterior
*/

let teste = 0

function testar() {
    // Teste os 3 console.log's abaixo e depois teste novamente colocando identificador de variável no "teste"
    // da função
    teste = 10
    return teste
}

console.log(teste)
console.log(testar())
console.log(teste)

/* Function Hoisting */

//Será executado, mesmo que a função seja declarada só depois, pois sofre hoisting
sayMyName()

// Function Declaration/Statement sofre hoisting
function sayMyName(){
    console.log("William Bruno")
}

// Não será executado, pois anonymous functions não sofrem hoisting, mesmo com identificador "var"
// ReferenceError: Cannot access 'sayMySecondName' before initialization
// sayMySecondName()

const sayMySecondName = function(){
    console.log("Bruno")
}

/* Arrow Function - Function Expression */

/*

const arrowFunction = function() {
    console.log("Esta é uma function expression|anonymous")
}

*/

// Como uma arrow function é uma outra forma de escrever uma function expression, ela não sofre hoisting
const arrowFunction = () => {
    console.log("Esta é uma arrow function")
}

/* Callback Function => Passa para uma função um argumento que é uma função também, pois são estruturas de dados*/

function callbackFunction(name){
    
}

callbackFunction(
    () => {
        console.log("Está é uma callback function!")
    }
)

/* Function Constructor: Object Oriented Paradigm
    - Criação de objetos
    - Expressão new
    - this keyword
*/

// É uma boa prática escrever funções construtoras com letras inciais maiúsculas
function Person(name, age, nationality) {
    this.name = name
    this.age = age 
    this.nationality = nationality

    this.sayMyName = () => {
        console.log(`My name is ${this.name}`)
    }
}

const william = new Person("William", 18, "Brazilian")

console.log(william)
william.sayMyName()