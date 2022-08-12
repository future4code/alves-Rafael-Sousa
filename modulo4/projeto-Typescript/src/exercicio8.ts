function renocacao (anoAtual: number, anoNas: number, anoEmissao: number) {
    const age = anoAtual - anoNas
    const carteiraId = anoAtual - anoEmissao

    if (age <= 20) {
        console.log("Voce deve renovar sua carteira de 5 em 5 anos")
        if (carteiraId >= 5) {
            console.log(`Sua carteira já passou de ${carteiraId} anos. Você deve renova-la`)
        } else {
            console.log(`Sua carteira tem menos de ${carteiraId} anos, não precisa renovar`)
        }
    } else if (age >= 21 && age <= 50) {
        console.log("Você deve renovar sua carteira de 10 em 10 anos")
        if (carteiraId >= 10) {
            console.log(`Sua carteira já passou de ${carteiraId} anos. Você deve renova-la`)
        } else {
            console.log(`Sua carteira tem menos de ${carteiraId} anos, não precisa renovar`)
        }
    } else if (age >= 51) {
        console.log("Você deve renovar sua carteira de 15 em 15 anos")
    }
}

renocacao(1993, 2011, 2022)