const checaRenovacaoRG =(anoAtual:number, anoNascimento:number, anoEmissao:number ):boolean=> {
    let idade:number= anoAtual - anoNascimento
    let tempoCarteira:number = anoAtual - anoEmissao
   
    const cond1 = idade <=20 && tempoCarteira >=5
    const cond2 = idade > 20 && idade <=50 && tempoCarteira>=10
    const cond3 = idade > 50 && tempoCarteira >= 15

    return(cond1 || cond2 ||cond3)
}
console.log(checaRenovacaoRG(2022, 1993, 199))
   