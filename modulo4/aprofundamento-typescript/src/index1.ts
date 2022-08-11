// a) Crie uma variável **minhaString** do tipo `string` 
// e atribua um valor a ela.
// Tente atribuir um número a esta variável. O que acontece?

// const minhaString: string = 20
// a variavel apontara um erro pois ela ja foi definida como String


// b) Crie uma variável **meuNumero** do tipo `number` 
// e atribua um valor numérico. Como fazer para que essa 
// variável também aceite strings? Ou seja, como criamos no 
// typescript uma variável que aceite mais de um tipo de valor?

// type valor ={
//     numero: number,
//     string:string
// }
// const meuNumero: valor={
//     numero:502151,
//     string:"asdsadasd"
// }

/* definimos um esqueleto com o TYPE para atribuir dois valores
em uma mesma variavel ou então use const variavel: string | number= (atribua algum valor "string ou number")*/

// c) Agora crie um novo objeto. Este objeto é uma pessoa, 
// e deve possuir três propriedades:

// `nome`, que é uma string;

// `idade`, que é um número;

// `corFavorita`, que é uma string.

// Crie mais três objetos, que também precisam ter apenas 
// os campos definidos acima. Crie um **tipo** `Pessoa` 
// para garantir que todos os objetos tenham os mesmos campos.

type pessoa={
    nome: string,
    idade: number,
    corFavorita: string
}

enum corFavorita{
    PRETO = "Preto",
    VERMELHO ="Vermelho",
    ROSA = "Rosa",
    VERDE = "Verde",
    AZUL = "Azul"
}
const pessoa2:pessoa={
    nome:"rafael" ,
    idade: 21,
    corFavorita:corFavorita.PRETO
}

const pessoa3:pessoa={
    nome: "pedro",
    idade: 28,
    corFavorita: corFavorita.VERDE
}   

// d) Modifique a propriedade corFavorita para que 
// apenas seja possível escolher entre as cores do arco-íris.
// Utilize um enum para isso.

console.table({pessoa2, pessoa3})