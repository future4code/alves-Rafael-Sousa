/* 1-  Indique todas as mensagens impressas no console, 
SEM EXECUTAR o programa.*/ 


// let array
// console.log('a. ', array)

/*nao contem nada dentro dessa variavel então no caso o resultado seria
 a. undefined */

//--------------------------------------------------------------------------//


// array = null
// console.log('b. ', array)

/* já essa variavel contém algo dentro  e no caso ficaria (b. null)

//-------------------------------------------------------------------------//



// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)


/* resposta seria (c. 11) pois o comando length serve 
para contar elementos dentro de uma array */ 

//-------------------------------------------------------------------------//




// let i = 0
// console.log('d. ', array[i])

/* no caso ficaria a resposta seria (d. 3)  pois para acessar um elemento de um array,
utilizamos a sua posição (ou índice) */ 

//--------------------------------------------------------------------------//



// array[i+1] = 19
// console.log('e. ', array)


/*pelo oq eu entendi o resultado ficaria (e. 11) pois nesse caso
a varaiavel usada não é a variavel (array[i+1]) e sim a (array)
nesse caso foi falho. */ 

//-------------------------------------------------------------------------//



// const valor = array[i+6]
// console.log('f. ', valor)
 
/* nesse caso o resultado seria (f. 9) pois na variavel (Valor) 
estão somando ela com o (i) que seria o numero 3 da array
sendo assim o resultado é 9. */


// 2- Leia o código abaixo com atenção 

// const frase = prompt("digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)


/* nesse caso a frase que vou usar como exemplo seria (Hoje o dia esta maravilhoso).
então com esse codigo ficaria (HOJE O DII ISTI MIRIVILHOSO) */ 


//------------------------------------------------------------------------------------------//


//Exercícios de escrita de código

// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
// O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!



/*const arrayNome = prompt("digite seu nome")

const arrayEmail = prompt("digite seu e-mail")

console.log (`O e-amail ${arrayEmail} foi cadastrado com sucesso. Seja bem vindo (a) ${arrayNome}`) */

//---------------------------------------------------------------------------------------------------//

// 2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável.
//  Em seguida, siga os passos:
    

//     a) Imprima no console o array completo
    
//const arrayComida = ["churrasco", "lasanha", "pastel", "macarrão", "lanche"] 

//console.log (arrayComida)

// b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", 
//seguida por cada uma das comidas, **uma embaixo da outra**.
    

/*const arrayComida = ["churrasco", "lasanha", "pastel", "macarrão", "lanche"] 


console.log(`essas são minhas comidas preferidas:\n ${arrayComida[0] } \n ${arrayComida[1]} \n ${arrayComida[2]} \n ${arrayComida[3]}\n ${arrayComida[4]} `)
*/




//c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário.
//Imprima no console a nova lista

let arrayComida = ["churrasco", "lasanha", "pastel", "macarrão", "lanche"] 

let usuarioComida = prompt("qual sua comida preferida?")

arrayComida.splice(2,1, usuarioComida)

console.log(arrayComida)

// 3. Faça um programa, seguindo os passos:
    
//     a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    

let arraySolo

let listaDeTarefas = arraySolo



//     b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    

let tarefa1 = prompt("diga uma tarefa que você precisa realizar")

let tarefa2 = prompt("diga outra tarefa que você precisa realizar")

let tarefa3 = prompt("diga mais uma tarefa que você precisa realizar")


arraySolo = [tarefa1, tarefa2, tarefa3]



//     c) Imprima o array no console
    

//console.log(listaDeTarefas)



//     d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    

let indice =  prompt("digite o indice de uma tarefa que você realizou: 0, 1 ou 2")
 

listaDeTarefas = arraySolo, indice



//console.log (indice)



//     e) Remova da lista o item de índice que o usuário escolheu.
    

arraySolo.splice(indice, 1)

//     f) Imprima o array no console


console.log (listaDeTarefas)