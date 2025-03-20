import { Router , Request , Response } from "express";
import { createUserController } from "../modules/cars/useCases/user/createUser";
import { listUsersController } from "../modules/cars/useCases/user/listUsers";
import { updateUserController } from "../modules/cars/useCases/user/updateUser";
import { deleteUserController } from "../modules/cars/useCases/user/deleteUser";
import { deleteAllUsersController } from "../modules/cars/useCases/user/deleteAllusers";

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

RoutesUser.delete("/delete" , (request: Request , response: Response):any =>{
    return deleteUserController.handle(request, response)
})

RoutesUser.delete("/deleteAllUsers" , (request: Request , response: Response):any =>{
    return deleteAllUsersController.handle(request, response)
})
export { RoutesUser }