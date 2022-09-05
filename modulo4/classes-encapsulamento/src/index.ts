import express, {Express} from "express"
import cors from "cors"
import { UserAccount } from "./types"
const app: Express = express()

app.use(express.json())
app.use(cors())

app.listen(3003, ()=>{
   console.log("Server ready!")
})

export default app


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

  class Bank {
    private accounts: UserAccount[];
  
    constructor(accounts: UserAccount[]) {
      this.accounts = accounts;
    }
  
    public getAccounts ()  {
      return {accounts: this.accounts}
    }
  }
