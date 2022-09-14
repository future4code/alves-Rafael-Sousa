import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
//a) sim é melhor que usar numeros


//2)


import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
//A) as string confirma que algo é do tipo string

