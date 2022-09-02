import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.post("/users/create", (req:Request, res:Response)=>{
    try {
        const {name, cpf, birthAsstring}= req.body
        
        const {day, month, year} =birthAsstring.split("/")
        const birth: Date = new Date(`${year} - ${month} - ${day}`)
        
        const ageMilisseconds: number = Date.now() - birth.getTime()
        
        const ageInYears:number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365

        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error ("Você não possui mais que 18 anos")
        }
       
        
        accounts.push({
            name,
            cpf,
            birth,
            balance: 0,
            extrato: []
        })
        res.status(201).send("Conta criada com sucesso!")
    } catch (error:any) {
        res.send(error.message)
    }
})
app.get("/users/all",(req:Request, res:Response)=>{
    try {
        if(!accounts.length){
            res.statusCode = 404
            throw new Error ("Nenhuma conta foi encontrada")
        }
        res.status(200).send(accounts)
    } catch (error:any) {
        res.send(error.message)
    }
})