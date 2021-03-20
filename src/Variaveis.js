/*
    Estruturas de dados para armazenar...dados, alocadas na memória(depende do tipo de dado)
    em um espaço separado da memória RAM chamado de pilha(Stack). Cada variável possui um espaço para
    ocupar e um endereço de memória hexadecimal. Na realidade, toda variável é um ponteiro
    que aponta para a região na memória com certo endereço e que guarda(ou não => null) o valor informado no programa.

    Dados => Números, caracteres, sequências, listas etc.
    Variáveis => Nomes simbólicos(identifiers) para valores guardados no programa

        => var 
        => let
        => const

    * obs: Em JS, assim como em diversas linguagens, as variáveis são tipadas dinamicamente dependendo do valor que recebem. Isso possui algumas consequências, tais como: o tipo dos valors de uma variável pode ser modificado ao longo do programa e listas(arrays) podem conter dados dos mais variados tipos.
*/

// var => variable => valores variáveis => permite a mudança de valor => menos usada do que let, pois var é global e local ao mesmo tempo => hoisting(elevação) => var x = 0 local é criada de forma global, ou seja: var x, e inicializada no escopo, x = 0
var sum = 4
console.log(`Sum = ${sum}`)
sum = 5
console.log(`Sum = ${sum}`)
console.log(`Tipo de sum = ${typeof sum}\n\n`)

// let => funciona assim como o var => permite a mudança do valor da variável
let number = 3
console.log(`Number = ${number}`)
number = 5
console.log(`Number = ${number}`)
console.log(`Tipo de number = ${typeof number}\n\n`)

// const => constant => valores constantes => não permite a mudança de valor
const num = 3
console.log(`Num = ${num}`)
console.log(`Tipo de Num = ${typeof num}`)

/*
    O escopo de uma variável determina a sua visibilidade e usabilidade
    Por padrão, todas as variáveis em JS são globais e, portanto, podem ser acessadas em todo o código do programa. Variáveis declaradas dentro de blocos de código(statements definidos por {}) são consideradas variáveis globais e só podem ser acessadas naquele statement.
*/

// ** var
// undefined => a variável existe, mas até o momento não foi declarada
console.log(`Existe x antes do scope? ${x}`)


{   
    var x = 0
    console.log(`Existe x no bloco? ${x}`)
}

console.log(`Existe x depois do bloco? ${x}`)

// ** const e let são locais, só funcionam no escopo onde foram criadas
// console.log("Y existe antes do bloco? "+y) => Geram erros de variável não definida => diferente de valor undefined
// console.log("Z existe antes do bloco? "+z)

{   
    let y = 3 
    const z = 4 
    console.log("Y existe no bloco? "+y)
    console.log("Z existe no bloo? "+z)
}
{

/*
     Nomeação de variáveis:
     => JS utiliza o padrão unicode => aceita acentos e etc
     => Case-sensitive

     ** Posso:
     => Iniciar com dois caracteres espeiciais: $ e _
     => Quaisquer letras
     => Acentos
     => Letras maiúsculas e minúsculas fazem diferença => case sensitive

     ** Não Posso:
     => Iniciar com Números
     => Utilizar espaçoes vazios

     ** Ideal:
     => Nomes que façam sentido
     => CamelCase
     => Escrever em inglês
     => Nome que descreva a utilização da variável
*/