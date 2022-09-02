export type Transaction ={
    value: number,
    date: Date,
    descrição:string
}

export type account ={
    name: string,
    cpf: string,
    birth: Date,
    balance: number,
    extrato: Array <Transaction>
}
