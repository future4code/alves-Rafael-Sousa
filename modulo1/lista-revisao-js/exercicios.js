// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
return array.length

}




// EXERCÍCIO 02
function retornaArrayInvertido(array) {

 return array.reverse()

}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
   
    return array.sort((a, b) => a - b)
}

// EXERCÍCIO 04
 function retornaNumerosPares(array){
let novoArray = []
    for (let i= 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          novoArray.push(array[i])
        }
    }
return novoArray
}



// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let dinovoArray = []
    for (let i= 0; i < array.length; i++) {
        if (array[i]  % 2 === 0 ) {
           array[i]= array[i] *array[i]
            dinovoArray.push(array[i])
        }
    }
return dinovoArray
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
    let tresArray = []

 
   
  
  return Math.max.apply(null,array )
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
var maior = Math.max.apply(num1, num2)


}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
return "Equilátero"
}

else  if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
   return "Escaleno"
}
   else{
return "Isósceles"
}

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  var tomaArray=[]
  array.sort((a, b) => a - b)
  tomaArray.push([array.length -1])
tomaArray.push(array[1])

return tomaArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}