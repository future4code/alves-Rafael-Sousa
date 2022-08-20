import express, { Request, Response } from "express";
import cors from "cors";
import { cadastro, dados } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

app.get("/users", (req: Request, res: Response)=>{
    res.send(cadastro)
})

app.post("/users", (req: Request, res: Response)=>{

   try {
    const {name, birth, age, email, cpf} = req.body
    
        if(age <= 17 ){
            res.statusCode = 400
            throw new Error ("você ainda não é maior de idade")
        }
       
       const newUsers:dados={
           name,
           cpf,
           email,
           age,
           birth
        }
        cadastro.push(newUsers)
    res.status(201).send("usuario criado com sucesso")
    
   } catch (error:any) {
    res.status(res.statusCode).send({message: error.message})
   }

})