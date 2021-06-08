/*
    String:

    => Cadeia de caracteres(array)

    "" => Aspas duplas
    '' => Aspas simples
    `` => Crases => template strings => permite 
    a formatação da string em multilinhas => permite
    a escrita de expressões regulares no JavaScript 
    => interpolação de dados

    => Case sensitive => imutáveis => a alteração em uma string acarreta na criação
    de uma nova com o valor atualizado e no apagamento da antiga da memória
*/

var nome = 'William'

console.log(nome)
console.log(nome[0])
console.log(nome[1])

/*
    Números:

    inteiros
    float
    NaN
    Infinity

*/

console.log(12 + 13.56)
console.log(12/ 34)
console.log(12 % 5)
console.log(12 / 'asdf')
console.log(12 == Infinity)

/*
    Boolean => valores verdadeiros(1) ou falso(0)

    expressões booleanas 
    ==
    >
    >=
    <
    <=
    !
    ^
*/

console.log(true)
console.log(false)

a = 3
b = 4

console.log((a > b) ^ (a < b))

/*
    undefined => não está definido => não existe
    null => não há nada no objeto => não referencia nenhum espaço na memória
*/

console.log(undefined)
console.log(null)

/*
    Object:
    => instância de uma classe
    => possui métodos e atributos
    => auxilia na abstração do códgio
    => é uma variável que referencia um espaço na memória chamado de heap onde estão
    guardados todos os valores dos atributos e métodos dados para o objeto em questão
    => estruturação de dados e métodos

    ex:
    * console => objeto ; log => método

    {   propriedade: "valor",
        propriedade_2: "Valor_2",
        propriedade_3: function(){
                            statement;
                        }
    }
*/

console.log({
    name: "William",
    idade: 18,
    ocupação: "Estudante",

    estudando: function(){
        console.log("JavaScript!")
    }
})

/*
    Array
    => Tipo de dados estrutural na memória
    => Acesso aos dados do array por meio de índices
    => Métodos e atributos importantes
    => Estruturação de dados importantíssima

    Agrupamento de diversos tipos de dados
    ['William', 18, 'Estudante']
*/

array = [
    ['William', 18, 'Estudante'], 
    ['Mayk', '36', 'Programador']
    ]

console.log(array[0])
console.log(array[1])

