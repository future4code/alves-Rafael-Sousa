import express, { Request, Response } from "express";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

type user ={
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}



const users :user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]
//EX 1

//A) usaria o metodo get app.get("/users", (req:Request, res:Response)=>{})

//B)indicaria a entidade com a rota ("/users") e para acessar a lista completa utilizaria res.send(variavel)

//EX 2 

//A) defini um esqueleto com o Type depois atribui ele a uma variavel e depois atribui um enum
// pois dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado.

//B) sim como dito a cima atravez do enum podemos fazer com que apenas dados validos sejam  utilizados.

//EX 3 

//A) nesse caso utilizaremos o req.query.name pois é um metodo get e em caso de busca em um mesmo conjunto,
// como em uma busca por nomes, devemos utilizar o parametro query.

//B) nesse caso deveriamos usar o TryCatch para montar uma logica concreta caso o usuario não seja encontrado.

//4 

//A) ele iria apenas atualizar os dados do usuario e se não tivesse esse usuario conseguiriamos criar outro porem não é uma boa pratica.

//B) não considero pois o metodo POST é o mais ideal para criar novos recursos é só seguir a lei do CRUD kkkk

//Endpoints dos exercicios acima

app.get("/users", (req:Request, res:Response)=>{
    res.send(users)
    //ex 1
})
app.get("/users", (req:Request, res: Response)=>{
    try {
    const name = req.query.name as string
    const user: user | undefined = users.find((user) => user.name === name)
    //EX 2/3
    if(!user){
        res.statusCode = 404
        throw new Error ("usuario não encontrado ")
    }
    res.status(200).send(user)
} catch (error:any) {
    res.status(res.statusCode).send({message: error.message})
}
})

//EX 4

app.post("/users",(req:Request, res:Response)=>{
    try {
        const {id, name, email, type, age} = req.body
       
        if(!id || !name || !email || !type || !age){

            res.statusCode = 422
            throw new Error ("por favor verifique os campos")
        }
       
      
        const newUser: user={
            id,
            name,
            email,
            type,
            age
        }

        users.push(newUser)
        res.status(201).send({message:"usuario criado com sucesso."})

    } catch (error:any) {
        res.status(res.statusCode).send({message: error.message})
    }
})








//Desafios

//EX 5

// app.put("/users", (req: Request, res:Response)=>{
//     try {
//         const newUser: user ={
//             id: req.body.id,
//             name: req.body.name,
//             email:req.body.email,
//             type:req.body.type,
//             age: req.body.age
//         }
        
// //        const trocaNome = users.filter((usuarios)=>{
// //             if(usuarios === newUser){
// //                usuarios.name
// //                usuarios.email
// //                usuarios.id
// //                usuarios.age
// //                usuarios.type
                
// //             }
// //         })

// //         res.status(201).send(trocaNome.lastIndexOf())

// //     } catch (error:any) {
// //         res.status(res.statusCode).send({message: error.message})
// //     }
// })