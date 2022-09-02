import  express, {Request, Response}  from "express";
import cors from "cors"
import { formatDiagnostic } from "typescript";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


app.get("/", (req:Request, res:Response) => {          
    res.send("salves a todes")
})

// exercicio2

type user={ 
     id:string | number,
     name:string,
     phone:number,
     email: string,
     website:string
}

const users: user[] = [{
    id: 23092001,
    name: "rafael",
    phone: 98989898989,
    email: "rafael@gmail.com",
    website: "www.rafaelsantos.com"
}]

//4

app.get("/users", (req:Request, res: Response)=>{
    if(!users.length){
        
        res.status(401).send("deu merda")
    } 
    res.status(201).send(users)
})

//5

type post ={
     id:number ,
     title:string,
     body: string,
     userId: string | number
}
//6
const posts: post [] =[{
    id:1231233 ,
     title:"dor de cabeça na aula",
     body: "estava remedio",
     userId: 12313213
}]

//7

app.post("/posts", (req: Request, res: Response)=>{
    if(!posts.length){
        res.status(401).send("deu merda")
    } res.status(201).send(posts)
})

// 8 

app.get("/posts/:userId", (req: Request, res: Response)=>{
   let user = req.params.userId
   const post = posts.filter((post)=>{
    return post.userId == user
   })
   if(post.length === 0) {
    return res.status(400).send("deu merda familia")
   }
   res.status(201).send(post)
       
   
})