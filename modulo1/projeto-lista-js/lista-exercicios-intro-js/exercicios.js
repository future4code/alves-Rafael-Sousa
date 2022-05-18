// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}
console.log(soma (8,4))


// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Olá')
 
  console.log(mensagem)
}


// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

const pt1 = +prompt("digite a altura do retangulo")
const pt2 = +prompt("digite a largura do retangulo")

// EXERCÍCIO 01
function calculaAreaRetangulo(altura, largura) {
  // implemente sua lógica aqui
   
return altura * largura
 
}

console.log ( calculaAreaRetangulo(pt1,pt2))

// EXERCÍCIO 02

const anoAtual = prompt("em qual ano estamos?")
const anonascimento = prompt ("qual seu ano de nascimento?")

function imprimeIdade(anorescente, anonascido) {
  // implemente sua lógica aqui
return anorescente - anonascido

}

console.log(`sua idade é : ${imprimeIdade(anoAtual,anonascimento)}`)

// EXERCÍCIO 03

const usuarioPeso = +prompt ("qual seu peso?")
const usuarioAltura =  +prompt("qual sua altura?")


function calculaIMC(peso, altura1) {
  // implemente sua lógica aqui

return peso / (altura1 * altura1)

}
console. log (`sueu imc é: ${calculaIMC(usuarioPeso, usuarioAltura)}`)

// EXERCÍCIO 04
let array1 = []

let nome1 = prompt('Digite seu nome, sua idade, seu e-mail')

array1 = nome1.split(" ")

function imprimeInformacoesUsuario(array2) {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  console.log(`Meu nome é ${arrayz[0]}, tenho ${arrayz[1]}, meu e-mail é ${arrayz[2]}`)
}


// EXERCÍCIO 05


let arraycor = []

let cor1 = prompt('Digite três cores, cor1, cor2, cor3')

arraycor = cor1.split(" ")

function imprimeInformacoesUsuario(arrayc) {

 // implemente sua lógica aqui

 return console.log(imprimeInformacoesUsuario(arrayc[arraycor]))


 }

// EXERCÍCIO 06

let stringtop = prompt("diga algo")
 
function retornaStringEmMaiuscula(stringt) {
  // implemente sua lógica aqui

   return console.log(retornaStringEmMaiuscula(stringtop).touppercase())
}



// EXERCÍCIO 07

const valorcusto = (prompt("valor do custo"))
const valor2 =  (prompt("valor do ingresso"))

function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

  return custo / valorIngresso
}
 console.log(calculaIngressosEspetaculo(valorcusto,valor2))


// EXERCÍCIO 08

const arraytest = prompt("digite algo")
const arraytest2 = prompt("digite algo")

function checaStringsMesmoTamanho(test1, test3) {
  // implemente sua lógica aqui

return test1 && test3
}

console.log(Boolean(checaStringsMesmoTamanho(arraytest, arraytest2)))

// EXERCÍCIO 09

let arrayEx = ["laranja", "preto", "amarelo"]

function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui

return  console.log(retornaPrimeiroElemento(arrayEx[0]))
}



// EXERCÍCIO 10

let arrayDoido = ["1", "2", "3"]

function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return  console.log(retornaUltimoElemento(arrayDoido[2]))
}

// EXERCÍCIO 11

let arraytroca = ["5","6","7"]
arraytroca.reverse()

function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

return console.log(trocaPrimeiroEUltimo(arraytroca))

}

// EXERCÍCIO 12

let stringrecebe = Prompt("digite algo com três letras") 

let stringrecebe1 = prompt("digite algo com três letras")


function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

 string1 && string2

 return console.log(checaIgualdadeDesconsiderandoCase(stringrecebe,stringrecebe1))
}



// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14

let ano1= prompt("digite um ano")


function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

return  (ano /= 400) 

}

console.log (Boolean(checaAnoBissexto(ano1||ano1)))
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}