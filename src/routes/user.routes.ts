import { Router , Request , Response } from "express";
import { createUserController } from "../modules/cars/useCases/user/createUser";
import { listUsersController } from "../modules/cars/useCases/user/listUsers";
import { updateUserController } from "../modules/cars/useCases/user/updateUser";

const RoutesUser = Router()

RoutesUser.post("/create", (request: Request , response: Response): any=>{
    return createUserController.handle(request, response)
})

RoutesUser.get("/listUsers", (request: Request , response: Response): any=>{
    return listUsersController.handle(request, response)
})

RoutesUser.put("/update" , (request: Request , response: Response):any =>{
    return updateUserController.handle(request, response)
})
export { RoutesUser }