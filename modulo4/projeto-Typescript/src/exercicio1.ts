type born = {
    day: number | string,
    month: number | string,
    year: number | string
}

function dadosPessoais () {
    const name: string = "Rafael santos"
    const nascimento: born = {
        day: 23,
        month: "setembro",
        year: 2001
    }
    console.log(`Olá me chamo ${name}, nasci no dia ${nascimento.day} do mês de ${nascimento.month} do ano de ${nascimento.year}`)
}

dadosPessoais()