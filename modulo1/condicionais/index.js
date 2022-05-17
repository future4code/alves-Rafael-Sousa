// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Leia o código abaixo:

const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}

// a) Explique o que o código faz. Qual o teste que ele realiza? 

/* esta perguntando se o numero do usuario é igual a dois
se for oque sobra é 0 se for igual a 0 vc passara no teste*/

// b) Para que tipos de números ele imprime no console "Passou no teste"? 


/* apenas para numeros par */



// c) Para que tipos de números a mensagem é "Não passou no teste"?

// apenas numeros impar nao passaram no test


// 2. O código abaixo foi feito por uma pessoa
//  desenvolvedora, contratada para automatizar algumas
//   tarefas de um supermercado:


// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)


// a) Para que serve o código acima?


// serve para determinar o valor das ffrutas listadas
// caso nao esteja listada sera 5 reais o valor da fruta não listada




// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// o preço da fruta maçã é R$ 2.25




// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?


// daria undefined pois foi quebrada a logica do Stwich


// 3. Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// esta pedindo para o usuario digitar um numero

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

//esse numero passou no test pois 10 é maior que 0
// porem se fosse -10 a logica era pra ser maior porem da erro nesse codigo

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.



// sim apontara um erro se o valor for menor que 0




//------------------------------------------------------------------------------------------------------------------------------------//



// - **Exercícios de escrita de código**
//  1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).
        
//  a) b) c) 
const pt = Number(prompt("digite sua idade"))

if(pt>18){

console.log("você pode dirigir")
}
else {

    console.log("voce não pode dirigir")

}

//2. Agora faça um programa que verifica que turno do dia 
// um aluno estuda. Peça para digitar M (matutino) ou V 
// (Vespertino) ou N (Noturno). Imprima no console a 
// mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!".
//  Utilize o bloco if/else


const alerta = alert("qual periodo você estuda digite (V) para vespertinho (M) matutino (N) noturno")
const pergunta = prompt("digite em qual turno você estuda")

if (pergunta === String("V").toLowerCase() ){

console.log("Bom Dia!!")

}
 if (pergunta ===String("M").toLowerCase()){

console.log("Boa Tarde!!")

 }
if (pergunta=== String("N").toLowerCase()){

    console.log("Boa Noite!!")
}

else {
    
    console.log("você nao estuda")
}

//------------------------------------------------------------------------------//




const aatencao = alert("qual periodo você estuda digite (V) para vespertinho (M) matutino (N) noturno")
const pergunta3 = prompt("digite em qual turno você estuda")


switch(pergunta3){


case String("V").toLowerCase():

console.log("Bom Dia!!") 

break;

case String("N").toLowerCase():

console.log("Boa Noite!!")

break 

case String("M").toLowerCase():

console.log("Boa Tarde!!")
break;

default:
console.log("você não estuda")
break;

}
console.log(pergunta3)


//---------------------------------------------------------------//

// 4. Considere a situação: você vai ao cinema com um 
// amigo ou amiga, porém ele/ela só assistirá a um filme 
// com você se ele for do gênero fantasia **e** se o ingresso
// está abaixo de 15 reais. Faça um código que pergunta 
// ao usuário qual o gênero de filme que vão assistir e 
// outra pergunta sobre o preço do ingresso, então
// verifique se seu amigo ou amiga vai topar assistir o 
// filme. Caso positivo, imprima no console a mensagem:
//`"Bom filme!"`, caso contrário, imprima `"Escolha outro 
//  filme :("`


const filme= prompt("digite o genero do filme que você quer assistir")
const valor = alert ("o valor desse genero é R$15")
const resultado= prompt("você deseja assistir esse filme?")

switch (filme){

case String("fantasia").toLowerCase():
   
resultado=== String("sim").toLocaleLowerCase()
console.log("você escolheu fantasia bom filme!!")


break;

case String("ação").toLowerCase():

    resultado === String("sim").toLocaleLowerCase()
    console.log(`você escolheu o genero Ação bom filme =D`) 

break

case String("comédia").toLowerCase():
    
    resultado === String("sim").toLocaleLowerCase()
console.log(`você escolheu o genero comédia bom filme =D`) 
 
  break

default: 
resultado === filme.toLocaleLowerCase()
console.log("você escolheu o genero,", filme, "bom filme :D" )
break 
}
console.log(valor,filme,)
//não consegui colocar a mensagem para dizer (escolha outro filme), pois não me lembrei como era 
//----------------------------------------------------------------------//


























