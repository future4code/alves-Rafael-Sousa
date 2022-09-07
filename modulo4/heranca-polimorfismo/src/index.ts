class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;
  
    constructor(
          id: string,
          email: string,
          name: string,
          password: string
      ){
          console.log("Chamando o construtor da classe User")
          this.id = id
          this.email = email
          this.name = name 
          this.password = password
      }
  
      public getId(): string {
          return this.id
      }
  
      public getEmail(): string {
          return this.email
      }
  
      public getName(): string {
          return this.name
      }
      public getPassowrd(): string {
        return this.password
    }
    public interoduceYourself(): string {
        return `Olá eu me chamo ${this.name}. Bom Dia!`
     }
 }
    

  const pessoa = new User ("rafael", "rafael@gmail.com", "rafael santos", "rafael123")

//   console.log(pessoa.getEmail())
//   console.log(pessoa.getId())
//   console.log(pessoa.getName())
  
  //1) A) não seria possivel.
  // B) vai ser impresso uma unica vez

  class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;
  
    constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
    ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
    }
  
    public getCreditCard(): string {
      return this.creditCard;
    }
  }

  const usuario = new Customer ("pedro", "sdadasda@gmail.com", "Pedro", "123456", "511511151155")

console.log(usuario.getCreditCard())
console.log(usuario.getId())
console.log(usuario.getName())
console.log(usuario.getEmail())
console.log(usuario.getPassowrd())
console.log(usuario.interoduceYourself())
//2) A) foi impresso uma unica vez no terminal

//B) foi impresso duas vezes no terminal pois ela recebe os valores do pai e tbm os próprios valores

//3) A) pelo oque eu entendi a senha poderia ser impressa mas mostraria a senha da subClass no caso a Customer


