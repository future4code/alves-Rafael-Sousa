/* 
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)*/


//------------------------------------//


 const bool1 = true
 const bool2 = false
 const bool3 = !bool2
 
 let resultado = bool1 && bool2
 console.log("a. ", resultado)
 
 resultado = bool1 && bool2 && bool3 
 console.log("b. ", resultado) 
 
 resultado = !resultado && (bool1 || bool2) 
 console.log("c. ", resultado)
 
 console.log("d. ", typeof resultado)



// Operador E (&&)retorna true, somente se todos os envolvidos também forem true, caso contrario ela dira que é false
// operador OU (||) retorna false, somente se todos os envolvidos forem false

//---------------------------------------------------------------------------------------------------------------------------//


/* 2. Seu colega se aproxima de você falando que o código dele não funciona como devia. 
Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? */ 
    
//     ```jsx
//     let primeiroNumero = prompt("Digite um numero!")
//     let segundoNumero = prompt("Digite outro numero!")
    
//     const soma = primeiroNumero + segundoNumero
    
//     console.log(soma)
//     ```

let primeiroNumero = prompt("Digite um numero!")


 let segundoNumero = prompt("Digite outro numero!")
    
const soma = Number(primeiroNumero) + (segundoNumero)

 console.log (soma)




//-----------------------------------------------------------------------------------------------------------------//


 
// 1) Faça um programa que:

// a) Pergunte a idade do usuário

let perguntaIdade = prompt ("qual é a sua idade?")

console.log (perguntaIdade)


// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

let amigoIdade = prompt ("quantos anos você tem mesmo?")

console.log (amigoIdade)


// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)


let idadeUsuario = Number (prompt("qual sua idade?"))
let idadeAmigo4 = Number (prompt("idade do melhor amigo?"))

let soma2 = idadeUsuario > idadeAmigo4
let soma3 = idadeAmigo4 <idadeUsuario

console.log(soma2,) //no meu caso o resultado da minha idade seria (false)


// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)


let idade1 = 20
let idade2 = 21

let resposta = idade1 - idade2

console.log("a diferença de idade é:", resposta) // fiz a subitração de dois némeros que no caso seria minha idade + idade do meu amigo.
 


 // 2- faça um programa que:



 // a) Peça ao usuário que insira um número **par**

let par = Number(prompt("insira um numero par!"))

console.log (par)



// b) Imprima na console **o resto da divisão** desse número por 2.
 par = Number(prompt("insira um numero par!"))

let numero1 = par / 2

console.log (numero1)


// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

/* nesse caso o padrão sempre sera fazer a divisão de qualquer número por 2 independente se 
for um número impar ou par*/


// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

//o número ira subitrair da mesma forma até mesmo se for um número fracionario



//----------------------------------------------------------------------------------------------------------------//


//3- Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

let anos = Number(prompt ("qual sua idade em anos?"))
 

console.log (anos)
// a) A idade do usuário em meses

let  idadeMesses = Number (prompt("qual sua idade em  messes?"))

let idaderesposta = idadeMesses * 12

console.log (idaderesposta)

// b) A idade do usuário em dias

let idadeEmDias = Number(prompt("qual sua idade em dias"))

let idadetrue = idadeEmDias * 365

console.log (idadetrue)

// c) A idade do usuário em horas

let idadeHora = Number(prompt("qual sua idade em horas?"))

let idadeTempoh = idadeHora *  8760

console.log(idadeTempoh)



//-----------------------------------------------------------------------------------------------------//




/* 4 - Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operaçõese e 
imprima no console as seguintes mensagens seguidas pelo true ou false:*/ 

// O primeiro numero é maior que segundo? true

let verdadeiro = Number (prompt("fale um número"))

let falso = Number(prompt("fale outro número"))


let resultado6 = verdadeiro > falso 

console.log("o numero é maior que o segundo?",resultado6)

// O primeiro numero é igual ao segundo? false

verdadeiro = Number (prompt("fale um número"))

 falso = Number(prompt("fale outro número"))


 let resultado7 = verdadeiro == falso

 console.log("o primeiro numero é igual ao segundo?",resultado7)

// O primeiro numero é divisível pelo segundo? true

verdadeiro = Number (prompt("fale um número"))

falso = Number(prompt("fale outro número"))

let resultado8 = Boolean (verdadeiro / falso)

console.log ("o primeiro numero é divisível pelo segundo?", resultado8)




// O segundo numero é divisível pelo primeiro? true

verdadeiro = Number (prompt("fale um número"))

falso = Number(prompt("fale outro número"))

let resultado9 = Boolean (falso / verdadeiro)

console.log ("o primeiro numero é divisível pelo segundo?", resultado9)


// obs: O true ou false vai depender dos números inseridos e do resultado das operações.
