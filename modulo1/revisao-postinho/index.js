
// COMPARADORES
// Exercício 1------------------------------------------------------------------------------------

// a-)Comparador de desigualdade a!==b 
// Exemplo:

function checarDesigualdade(a, b) {

    return `No comparador de desigualdade ${a}!==${b} é ${a !== b}`
}
console.log(checarDesigualdade(1, 3));

// b-)Compare a igualdade entre a===b

function checarIgualdade(a, b) {
 
 
return  `No comparador de Igualdade${a} === ${b}é ${a === b}` 
 
}
console.log(checarIgualdade(1, 3));
// c-)Faça uma função chamada "verificaSeEMaior"
function verificaSeEMaior(a, b){
return `verificar se a é maior que b ${a}>${b} é ${a > b}`

}
console.log(verificaSeEMaior(321, 2156));


// Exercício 2------------------------------------------------------------------------------------
//Escreva true or false para as comparações abaixo:
// exemplo 1>2 = false
// a-) 1==='1'= false
// b-) 1=='1'= false
// c-) 'a'==='b'=false
// d-) 'b'>'a'= false
// e-) 0!==null= true


// CONDICIONAIS

// Exercício 3------------------------------------------------------------------------------------
const cadastro = () => { 
    
    let nomeUser = prompt("digite o nome de usuario")
    let senha = (prompt("digite uma senha com 6 caracteres"))
    let ano = Number (prompt("digite seu ano de Nascimento"))
    let paisOrigem =prompt("digite sua nacionalidade")
    
let idade = 2022 - ano
        
      
            const usuario = []
 
             usuario.push(nomeUser, senha, ano, paisOrigem)
        
             if(usuario[1].length > 6 && idade >= 18 && usuario[3] === "Brasileiro"){
              
                 console.log("conta cadastrada com sucesso")
             }

            else{
                console.log("Conta não cadastrada")
            }
        }

console.log(cadastro())

// Exercício 4-----------------------------------------------------------------------------------------------

const login = () => {
    const login = "labenu"
let verifica = prompt("digite sua senha")

if(login === verifica){
    console.log("senha está correta")
}
else {
    console.log("senha invalida")
}
}

console.log(login());

// Exercício 5----------------------------------------------------------------------------------------------------

const primeiraDose = () => {

   let nome = prompt("digite seu nome")
   let vacinaTomada= prompt("qual vacina você tomou?")
   let coronavac = "coronavac"
   let astrazenica = "astrazenica"
   let pfizer= "pfizer"

if(vacinaTomada === coronavac){
    var tempo = 28
   var  data = "18/06/2022"
console.log(`Olá ${nome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
}

if(vacinaTomada === astrazenica){
  var  tempo = 90
  var  data = "22/08/2022"

   console.log(`Olá ${nome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
}

if(vacinaTomada=== pfizer){
    var  tempo = 90
    var  data = '22/08/2022'
  
     console.log(`Olá ${nome}! A próxima dose da ${vacinaTomada} é daqui a ${tempo} dias. Compareça no posto na data ${data}.`)
  
}

}
console.log(primeiraDose())


// LOOP+CONDICIONAL

// Exercício 6 -------------------------------------------------------------------------------------

const segundaDose = (nomeDoUsuario) => {
    const usuarios = [
        { nome: "Artur", imunizacao: "incompleta" },
        { nome: "Barbara", imunizacao: "incompleta" },
        { nome: "Carlos", imunizacao: "incompleta" }
    ]

    //  Sua lógica aqui
    
        console.log(usuarios[1].imunizacao.replace("incompleta", "completa"))
    
    
    }

console.log(segundaDose("Barbara"));

// Exercício 7 --------------------------------------------------------------------------------------


    const avisoAosAtrasados = () => {
        const usuarios = [
            { nome: "Artur", imunizacao: "incompleta" },
            { nome: "Barbara", imunizacao: "completa" },
            { nome: "Carlos", imunizacao: "incompleta" }
        ]
    
        let imunizacao = [
            { completa: "completa" },
            { incompleta: "incompleta"}
        ]
    
        if (usuarios[0].imunizacao == "completa") {
            console.log(`Olá ${usuarios[0].nome}, "sua imunização está" ${imunizacao[1].incompleta}!`)
        } else {
            console.log (`Olá ${usuarios[0].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
        }
    
        if (usuarios[1].imunizacao == "completa") {
            console.log(`Olá ${usuarios[1].nome}, sua imunização está ${imunizacao[0].completa}!`)
        } else {
            console.log (`Olá ${usuarios[1].nome}! Sua imunização está ${imunizacao[1].incompleta}, por favor volte ao postinho para tomar a segunda dose.`)
        }
    
        if (usuarios[2].imunizacao == "completa") {
            console.log(`Olá ${usuarios[2].nome}, sua imunização está ${imunizacao[1].incompleta}!`)
        } else {
            console.log (`Olá ${usuarios[2].nome}! Sua imunização está ${imunizacao[1].incompleta} , por favor volte ao postinho para tomar a segunda dose.`)
        }
    
    
    }
 

console.log(avisoAosAtrasados());


// DESAFIO------------------------------------------------------------------------------------------

const usuarios = [
    {
        nome: "Artur",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "pfizer",
        imunizacao: "incompleta"
    },
    {
        nome: "Bárbara",
        ano: 1984,
        nacionalidae: "brasileira",
        senha: "labenu",
        vacina: "astrazenica",
        imunizacao: "completa"
    },
    {
        nome: "Carlos",
        ano: 2000,
        nacionalidae: "brasileiro",
        senha: "123456",
        vacina: "coronavac",
        imunizacao: "incompleta"
    }

]

const cadastroDesafio = () => {
    //  Sua lógica aqui
}
console.log(cadastroDesafio());

const loginDesafio = () => {
    //  Sua lógica aqui
}
console.log(loginDesafio());

const primeiraDoseDesafio = () => {
//  Sua lógica aqui
}
console.log(primeiraDoseDesafio())
const segundaDoseDesafio = (nomeDoUsuario) => {
    //  Sua lógica aqui
}
console.log(segundaDoseDesafio("ALGUM NOME AQUI"));

const avisoAosAtrasadosDesafio = () => {
    //  Sua lógica aqui
}
console.log(avisoAosAtrasadosDesafio());