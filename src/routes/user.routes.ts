import { Router , Request , Response } from "express";
import { createUserController } from "../modules/cars/useCases/user/CreateUser";


const RoutesUser = Router()

RoutesUser.post("/create", (request: Request , response: Response): any=>{
    return createUserController.handle(request, response)
})

export { RoutesUser }