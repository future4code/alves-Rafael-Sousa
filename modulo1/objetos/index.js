// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. 
//Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
 

//   1.  Leia o código abaixo
//A)

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// no caso seria impresso o nome do matheus nachtergaele, o nome da Virginia Cavendish
// e tbm imprimiria o nome da emissora globo e o horario de 14hrs.

//-------------------------------------------------------------------------------------------------------//


// 2. Leia o código abaixo
    
//     ```jsx
//     const cachorro = {
//     	nome: "Juca", 
//     	idade: 3, 
//     	raca: "SRD"
//     }
    
//     const gato = {...cachorro, nome: "Juba"}
    
//     const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}
    
//     console.log(cachorro)
//     console.log(gato)
//     console.log(tartaruga)
//     ```
    
//     a) O que vai ser impresso no console?

// vai ser impresso o nome do aniamal a idade, e a raca dos animais



//     b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//ele copia a propriedade de objetos sobrescrito 

//---------------------------------------------------------------------------------------------------------------//

// 3. Leia o código abaixo
    
//     ```jsx
//     function minhaFuncao(objeto, propriedade) {
//     	return objeto[propriedade]
//     }
    
//     const pessoa = {
//       nome: "Caio", 
//       idade: 23, 
//       backender: false
//     }
    
//     console.log(minhaFuncao(pessoa, "backender"))
//     console.log(minhaFuncao(pessoa, "altura"))
//     ```
    
//     a) O que vai ser impresso no console?
    
// vai apontar false e undefined 


//     b) Explique o valor impresso no console. Você sabe por que isso aconteceu?


// apontou false porque na const pessoa foi definido que é false então apareceu esse resultado 

// o undefined apareceu pq "altura " nao foi definido.


//--------------------------------------------------------------------------------------------------------//

// - **Exercícios de escrita de código**
//  1. Resolva os passos a seguir: 
        
// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). 
// Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 


let amigo = {
nome: "ilson",
apelidos: ["broca","matheus"]

}
 
function definicao(amigo1){

console.log(`eu sou ${amigo1.nome}, mas pode me chamar de ${amigo1.apelidos[0]} ou ${amigo1.apelidos[1]}`)

}
definicao(amigo)

//---------------------------------------------------------------------------------------------------------------//


// b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome,
// mas com uma nova lista de três apelidos.Depois, chame a função feita no item 
// anterior passando como argumento o novo objeto


   amigo = {
    nome: "ilson",
    apelidos:["gigante", "Paoduro"]
 } 

console.log (definicao(amigo))

//----------------------------------------------------------------------------------------------------------//

// 2. Resolva os passos a seguir: 
    
//     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 
    let objeto = {
        nome:"Rafael",
        idade:"20",
        Profissao:"jogador de lol"
    }

let objeto2 = {

    nome:"fulano",
    idade:"20",
    profissao: "medico"

}

//     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

function mudanca(tudo){

return console.log(`me chamo ${tudo.nome}, tenho ${tudo.idade} anos e esta é minha profissao ${tudo.profissao}`)

}

mudanca(objeto2)

mudanca(objeto)

//-----------------------------------------------------------------------------------------------------------------------//



// 3. Resolva os passos a seguir: 
    
// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`
    

let carrinho = []


// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)
    
let frutinhas = {
    
nome:"banana",
disponibilidade: true 

}

let fruit= {
    nome:"uva",
    disponibilidade: true
}

let frutinhas2 = {
nome: "morango",
disponibilidade: true

}

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.


function Fruta1(fruta, fruta5,fruta6){

  carrinho.push(fruta, fruta5, fruta6)

  return console.log(fruit, frutinhas, frutinhas2)
}

Fruta1(carrinho)





