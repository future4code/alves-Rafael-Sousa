/*Tente responder os exercícios dessa seção sem executar o código.
 Se ficar muito difícil, pode rodar no seu computador
  **para analisar e pensar sobre o resultado.** */

 //1 Leia o código abaixo


//   function minhaFuncao(variavel) {
//  	return variavel * 5
//  }
 
 

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

/* ira ser impresso o valor da sua variavel vezes 5, pdoemos 
ver claramente que o valor delas foram alterado pois foi ultilizado
o (return) para chamar a function novamente e assim estar alterando
o valor delas. */

// b) O que aconteceria se retirasse os dois 
// `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? 
// O que apareceria no console?

/* o console iria imprimir a ultima alteração feita

EX: minhaFuncao(2) // seria substituido pelo o de baixo

    minhaFuncao(10)// o valor a ser impresso seria esse */ 


//----------------------------------------------------------------------------------------------//



// 2- Leia o codigo abaixo

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. Explique o que essa função faz e qual é sua utilidade


/* nesse caso pediria para o usuario escrever um texto
em seguida ele imprimiria no console o texto do usuario em minusculo
e procuraria pela palavra cenoura de ela estiver contida no texto do 
usuario. porem o codigo deixa a funcao anonima*/ 




// b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//      i.   `Eu gosto de cenoura`
//      ii.  `CENOURA é bom pra vista`
//      iii. `Cenouras crescem na terra`
 /* vai dar true em todas*/



//Exercicios de escrita de código


//1-escreva as funcoes explicadas abaixo:

 //  a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 


// function exp3(nome, idade, cidade){

// console.log("eu sou", nome, "tenho", idade, "anos de idade, moro em", cidade)

// return ("eu sou" + nome + "tenho" + idade + "anos de idade, moro em" + cidade)

// }

// const nome = prompt(`qual é seu nome?`)
// const idade = prompt(`qual sua idade?`)
// const cidade = prompt(`onde você mora?`)

// exp3(nome, idade, cidade,)

 //-------------------------------------------------------------------------------//

 
//  b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`). Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem com o template:


//  ```
//  Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].
//  ```
// function exp3(nome, idade, cidade){


// console.log("eu sou", nome, "tenho", idade, "anos de idade, moro em", cidade)
    
 // return ("eu sou" + nome + "tenho" + idade + "anos de idade, moro em" + cidade)
    
 // }
    
// const nome = prompt(`qual é seu nome?`)
// const idade = prompt(`qual sua idade?`)
 // const cidade = prompt(`onde você mora?`)


 //----------------------------------------------------------------------------------------------------------------------//



//  2. Escreva as funções explicadas abaixo:
 

//  a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
//faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.
 
// const variavel = (number1,nunber2) => {
//     return number1+number2}
    
// console.log(variavel(1,4))





//  b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo

// const numereros = (numero1,numero2) => {
    
//     const comparar = numero1 > numero2
//     return comparar 

// }


// console.log(numeros(1,2))



//  c) Escreva uma função que receba um número e devolva 
//um booleano indicando se ele é par ou não
 

// const numero = (numero1, numero2) =>{

// const Par1= numero1 % numero2

// return Par1

// }
// console.log(numero(10,10))

//  d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, 
//juntamente com uma versão dela em letras maiúsculas.

//  function txt1 (texto){
//      const txt = txt1.touppercase()
     
//      return txt

// }
// const texto = ("ola me chamo rafael")

// console.log(txt1)


//3) Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo
 //usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


function numero (numero1,numero2){

const somar = numero1 + numero2

const subtrair = numero1 - numero2

const multiplicar = numero1 * numero2

const dividir = numero1 / numero2

const calculador = (somar + subtrair + multiplicar + dividir )
 
return calculador
}

console.log(calculador (50,80))
// provavelmente esta errado mas vou pegar a base logo logo 
// estou com um pouco de dor de cabeça pq estou sem oculos ai nao presto muita atenção na aula
// mas nao vou deixar de estudar !! LABENU<3