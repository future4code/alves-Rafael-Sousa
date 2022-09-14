import express, { Request, Response } from "express";
import { generateId } from "./services/ex";
import { generateToken } from "./services/token";
import { AddressInfo } from "net";
import { createUser } from "./data/data";
const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

app.post("/user/signup", async (req: Request, res: Response) => {
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      // Item c. Validação da senha
      if (!req.body.password || req.body.password.length < 6) {
        throw new Error("Invalid password");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
      const id = generateId();
  
    
      await createUser(id, userData.email, userData.password);
  
      const token = generateToken({
        id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });


  //5)

  