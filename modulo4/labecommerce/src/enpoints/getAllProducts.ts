import { Request, Response } from "express";
import {selectProducts} from "../data/queries/selectProducts";


export const getAllProducts = async(
    req: Request,
    res: Response
): Promise <void> => {
    try {
        
        const products = await selectProducts()

        if(products.length < 1) {
            res.statusCode = 404
            throw new Error("Não existem produtos!");
        }

        res.status(200).send(products)
    } catch (error:any) {
        res.status(500).send({
            message: error.message
          });
    }
}