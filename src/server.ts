import express from "express"
import { categoriesRoutes } from "./routes/categories.routes";
import { SpecificationRoutes } from "./routes/specification.routes";
import { RoutesUser } from "./routes/user.routes";

const app = express()
app.use(express.json())

app.use("/categories", categoriesRoutes)
app.use("/specification", SpecificationRoutes)
app.use("/user", RoutesUser)

app.listen(2525 , ()=>{return console.log("Server is running at the port 2525.");
})