import { app } from "./app"
import { createUser } from "./enpoints/createUser"
import { createProduct } from "./enpoints/createProduct"
import { createPurchases } from "./enpoints/createPurchases"
import { getAllUsers } from "./enpoints/getAllUsers"
import { getAllProducts } from "./enpoints/getAllProducts"
import { getPurchasesByUserId } from "./enpoints/getPurchasesByUserId"


app.get("/users", getAllUsers)

app.get("/users/:userId/purchases", getPurchasesByUserId)

app.post("/users", createUser)

app.get("/products", getAllProducts)

app.post("/products", createProduct)

app.post("/purchases", createPurchases)





