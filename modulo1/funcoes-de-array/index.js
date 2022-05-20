// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1.  Leia o código abaixo



// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })
//   a) O que vai ser impresso no console?

// ira imprimir o item do array no caso nome e apelido da pessoa 

// 2- Leia o código abaixo

//a) O que vai ser impresso no console?
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// // ira  imprimir apenas os nomes dentro do array pois arrow function o return foi apenas para o nome

// //3-Leia o código abaixo]

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //a) O que vai ser impresso no console?
  // ira imprimir todos menos a chijo pois no return foi pedido um valor indiferente da chijo





//   - **Exercícios de escrita de código**
//   1. Dado o seguinte array de cachorrinhos que são clientes
//  de um pet shop, realize as operações pedidas nos itens 
//  abaixo utilizando as funções de array **map** e **filter:**

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos



// const arraypets= pets.map((item, index)=>{
// return item.nome
// })

// console.log(arraypets )


// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// let arrayapelido=pets.filter((item)=>{

// return item.raca === "Salsicha"
// })

// console.log(arrayapelido)



// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"


let msg = pets.filter((pets)=>{

   return  pets.raca === "Poodle"

})
let petsMSG = msg.map((pets)=>{

 return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${pets.nome}!`)
})


//2-Dado o seguinte array de produtos, realize as 
//operações pedidas nos itens abaixo utilizando as funções de array map e filter:



const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]


//  a) Crie um novo array que contenha apenas o nome de cada item


const arrayProdutos= produtos.map((item)=>{
 return item.nome
 })

 console.log(arrayProdutos)



//  b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles
 
const descontoProduto = produtos.map((produto)=>{

delete produtos.categoria

let preco = produto.preco

let valorFinal = preco - (preco * 0.05)
produto.preco = valorFinal
console.log(produto)

})

//  c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
 

 let arrayBebidas=produtos.filter((produto)=>{

 return produto.categoria === "bebida"
 })

 console.log(arrayBebidas)


//  d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"


const ProdutoIpe= produtos.filter((produto)=>{
return produto.nome.includes("Ypê")

})

//e)
const Ipe =ProdutoIpe.map((produto)=>{

return console.log(`Compre${produto.nome} por${produto.preco}`)
})

// - 🏅  Desafios
   
// 1. Dado o seguinte array de pokémons, realize as operações pedidas nos itens abaixo:

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]


//  a) Crie um novo array que contenha apenas o nome dos pokémons em **ordem alfabética**


const pokeNome = pokemons.map((pokemons)=>{
return pokemons.nome

})

console.log(pokeNome.sort())


//b) Crie um novo array apenas com os tipos dos pokémons, sem repetição

