import { v4 } from "uuid";
import { connection } from "../data/data";

export function generateId(): string {
    return v4();
  }
  
  