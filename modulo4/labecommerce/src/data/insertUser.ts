import { Request, Response } from "express";
import { User } from "../types";
import { connection } from "./database";



export default async function InsertUser(InsertUser:User):Promise<string> {
    const {id, name, email, password}= InsertUser
    
    await connection("labecommerce_Users")
    .insert({
        id,
        name,
        email,
        password
    })

    return `Usuario ${name}, criado com sucesso!`
}