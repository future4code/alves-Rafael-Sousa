import express, { Request, Response } from "express";
import cors from "cors";
import { produtos } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//ex 1

app.get("/test", (req: Request, res: Response)=>{
    res.send("tudo ok por aqui  xD")
})

//ex 3

app.post("/create", (req:Request, res:Response)=>{
   const newId = String(Math.floor(Math.random() * 10)) 

   type produto ={
    name:string
    id: string
    price: number
}

const newProdutc: produto={
    name:req.body.name,
    id: req.body.id,
    price: req.body.price
} 
produtos.push(newProdutc)

res.send(produtos)

    })
// ex 4

app.get("/allProdutc", (req:Request, res:Response)=>{
    res.status(201).send(produtos)
})

//ex5
app.put("/changePrice/:id", (req:Request, res:Response)=>{
    
    const newId = req.params.id
     produtos.filter((produto)=>{
        if(produto.id === newId){
            produto.price = 500
            return produto
        }
    })
   res.send(produtos)
})

//ex 6
app.delete("/delete/:id", (req:Request, res:Response)=>{
    const delId = req.params.id
    produtos.filter((produto)=>{
        if(produto.id === delId){
          
            return produto
        }
    })
    res.send(produtos)
})

//Não tive tempo para terminar os proximos exercícios 7,8 e 9 que seria para refatorar
// e indicar as validações porém sei como fazer, deixei um exemplo que fiz rapido na linha 102




























// try {
//     const {price} = req.body
//     const userId:string =(req.params.id)
//     if(!price){
//         res.statusCode= 422
//         throw new Error (`campo de ${price} vazio`)
//     } if(price <= 0){
//         res.statusCode = 422
//         throw new Error ("valor de price é menor que 0")
//     } if(price !== "number"){
//         res.statusCode= 422
//         throw new Error ("price não é um numero")
//     }
//     const idFalso = produtos.filter((produto)=>{
//         return produto.id === userId
//         })
//         if(!idFalso){
//             res.statusCode = 422
//             throw new Error("id não encontrado")
//         }
//         const novoValor = produtos.map((produto)=>{
//             if(produto.id === userId){
//                 return ()
//             }
//         })
    
    
//    } catch (error:any) {
    // res.status(res.statuscode || 500).send(message: error.message)
//    }