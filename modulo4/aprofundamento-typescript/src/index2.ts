// a) Quais são as entradas e saídas dessa função? 
// Copie a função para um arquivo .
// ts e faça a tipagem desses parâmetros

const obterEstatisticas =(numeros: number[]):object => {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

const arrayNumber: Array<number> = [20,3,25,36,74];

console.log(obterEstatisticas(arrayNumber));


//a) é a entrada de um array e a saida é um objeto

//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

//const numerosOrdenados: number
  //let soma:number
  //const estatisticas: object
  
//   c) Crie um type chamado amostra de dados, isto é, 
//   um objeto com as propriedades numeros e obterEstatisticas. Abaixo, 
//   temos um exemplo de objeto desse tipo, declarado em JavaScript:
 
type amostra={
    numeros: number[];
    obterEstatisticas: ()=>{estatisticas(numeros:number[]):object;};
}