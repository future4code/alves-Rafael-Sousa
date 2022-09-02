import { Request, Response } from "express";
import InsertUser from "../data/insertUser";
import { User } from "../types";




export default async function CreateUsers(req:Request, res:Response ) {
    try {
        const {id, name, email, password}:User= req.body

        if(!name || !email || !password){
            throw new Error ("os compos devem ser passados corretamente")
        }

         const userInsert:User ={
            id: Date.now().toString(),
            name,
            email,
            password
        }
        console.log(userInsert)

        const envFromDataBase = await InsertUser(userInsert)

        res.status(201).send({message: envFromDataBase})

    } catch (error: any) {
        res.status(500).send({message: error.message})
    }
}   