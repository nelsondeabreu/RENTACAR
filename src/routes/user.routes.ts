import { Router , Request , Response } from "express";
import { createUserController } from "../modules/cars/useCases/user/CreateUser";
import { listUsersController } from "../modules/cars/useCases/user/listUsers";

const RoutesUser = Router()

RoutesUser.post("/create", (request: Request , response: Response): any=>{
    return createUserController.handle(request, response)
})

RoutesUser.get("/listUsers", (request: Request , response: Response): any=>{
    return listUsersController.handle(request, response)
})

export { RoutesUser }