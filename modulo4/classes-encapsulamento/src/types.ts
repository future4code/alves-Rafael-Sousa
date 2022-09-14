/* A) Podemos ter ações que devem ser executadas ao criar uma 
instância da classe, Para isso existe o construtor, ele deve ser declarado 
como uma função constructor ele tambem pode receber parametros que podem ser
passados no momento de de criar a instância.

Para chamalo devemos criar uma class antes(
    class bananinha{
        nome: string,
        validade: number

        aqui chamaremos ele
        constructor{
            name: string
            validade: number
        }
    }
)*/

//B)

export class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];
  
    constructor(
       cpf: string,
       name: string,
       age: number,
    ) {
       console.log("Chamando o construtor da classe UserAccount")
       this.cpf = cpf;
       this.name = name;
       this.age = age;
    }
    public getName(): string{
        return this.name
     }
     public getCpf():string{
        return this.cpf
     }
     public getAge(): number{
        return this.age
     }
   public setName(name: string){
        this.name = name
     }
   public setCpf(cpf: string){
         this.cpf = cpf 
     }
     public setAge(age:number){
        this.age = age 
    }
  }
const Pessoa: UserAccount = new UserAccount("511111777", "Rafael", 21)
console.log(Pessoa.getName())
Pessoa.setName("")
console.log(Pessoa)

// não foi impressa no console, não sei oque pode ter acontecido.

//C) para termos acesso temos que fazer uma função publica para pegar as dependencias privadas
// porem mesmo fazendo isso não consegui, até então foi oque eu entendi da aula
export class Transaction {
    private date: string;
    private value: number;
    private description: string;
    
    constructor(date: string, value: number, description: string) {
      this.date = date;
      this.value = value;
      this.description = description
    }
  }