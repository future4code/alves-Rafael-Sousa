import app from "./app"
import { createUser } from "./endpoints/createUser"
import { login } from "./endpoints/login"
import { getProfile } from "./endpoints/getProfile";
import { getAnotherProfile } from "./endpoints/getAnotherProfile";
import { createRecipe } from "./endpoints/createRecipe";
import { getRecipe } from "./endpoints/getRecipe";

app.post("/signup", createUser)

app.post("/login", login);

app.get("/user/profile", getProfile);

app.get("/user/:id", getAnotherProfile);

app.post("/recipe", createRecipe);

app.get("/recipe/:id", getRecipe);