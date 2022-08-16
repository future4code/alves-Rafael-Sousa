import express, { Request, Response } from "express";
import cors from "cors";
import { lista } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//ex1
app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//ex4 


app.get("/tarefas", (req:Request, res:Response)=>{
  
    console.log("chave do query =", req.query.status)
    console.log("nome do query =", req.query.name)


   const newList = lista.filter((tarefa)=>{
    switch (req.query.status) {
        case "completas":
        if(tarefa.completed === true){
            return tarefa
        }
        case "incompletas":
            if(tarefa.completed === false){
                return tarefa
            }
    }
   })
    res.send(newList)
})

//5

app.post("/create", (req: Request, res: Response)=>{

})