/*  
    * Prototype: Ao criarmos um objeto em js, ele irá herdar vários métodos e atributos de um outro objeto já criado previamente,
    chamado de protótipo, ou prototype, por meio de herança.

    * prototype chain: conjunto de métodos e atributos herdados
    * __proto__

    * Atributos e métodos acessados pelo operador ponto => encapsulados por objetos
*/

// Exemplo de métodos encapsulados por objetos, obs: String é um objeto
let nome = "william"

console.log(nome.endsWith("iam"))
console.log(nome.replace('i', 'o'))

let arrayNome = nome.split('i')
console.log(arrayNome)

let primeiraLetra = nome.slice(0, 1)
let finalNome = nome.slice(1, nome.length)

// Conceito de imutabilidade de String:
primeiraLetra = primeiraLetra.toUpperCase()

nome = primeiraLetra.concat(finalNome)
console.log(nome)

let floating = 23.7864
console.log(floating.toFixed(2).replace('.', ','))

/* 
    Type conversion (Type casting) vs Type coersion
    *           Modificamos ------------ JS Modifica

    * Modificar o tipo de dado de uma variável 
*/

//Exemplo de conversão de tipos de dados => Transformando string em número e vice-versa
// Type coersion
console.log('9' + 5)

// Type conversion
console.log(Number('9') + 5)
console.log('9' + String(5))

// Por quê as classes Number e String estão capitalizadas? Por quê são classes! Wrapper classes e as demais classes devem ser escritas em maiúsculo!

let frase = "Olá, eu sou o Goku!"

// O método search retorna em que índice começa uma certa palavra em uma String | Retorna -1 se não encontrar
console.log(frase.search("Goku"))
console.log(frase.search("banana"))

// O método includes() retorna um booleano equivalente a se a String inclui ou não outra String
console.log(frase.includes("Olá"))

// Entenendo como manipular uma String em um array e vice-versa

let stringTeste = "Testando a separação de String"
console.log(stringTeste.split(' '))

// O método split separa uma String em determinado caractere escolhido, enquanto o método join junta os elementos de um array de Strings separando-os com determinado caractere definido
console.log(stringTeste.split(' ').join('_'))

// Criando array com construtor => O objeto String é criado explicitamente. Portanto, devemos utilizar o método valueof() para ter acesso a seu conteúdo e não a sua estrutura de objeto como um todo.

let myArray = new String("Olá, eu sou o William!")
console.log(myArray.valueOf())

// O mesmo raciocínio vale para métodos construtores de wrapper classes de números
let myNumber = new Number(345.67)
console.log(myNumber.valueOf())

let mySecondArray = new Array(1, 2, 'b', 'banana')
console.log(mySecondArray)

// Agora veremos como transformar uma String em um array:

let myString = "Olá, eu sou o William!"

// Chamamos a wrapper class "Array" e invocamos seu método "from" que espera como argumento uma String
console.log(Array.from(myString))

// Manipulação de arrays:

let techs = ["html", "css", "js"]

// Adicionar um item ao fim do array => Método push()
techs.push("react")
techs.push("vue") 
console.log(techs)

// Adicionar um item no começo do array => Método unshift()
techs.unshift("sql")
console.log(techs)

// Remover um item do fim do array => Método pop()
techs.pop()
console.log(techs)

// Remover um item do começo do array => Método shift()
techs.shift()
console.log(techs)

// Pegar apenas alguns elementos do array => Método slice(índice inicial, índice final + 1)
console.log(techs.slice(1, 3))

// Remover mais de um elemento do array => Método splice(índice inicial, quantidade de elementos a serem retirados a partir do inicial)

console.log(techs.splice(1, 2))

// Encontrar a posição do elemento em um array => Método indexOf(element) => Retorna -1 se não encontrar element

let index = techs.indexOf("html")
techs.splice(index, 1)
console.log(techs)