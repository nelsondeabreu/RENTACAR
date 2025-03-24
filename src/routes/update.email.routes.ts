import { Router , Request , Response } from "express";
import { sendCodeConfirmationController } from "../modules/cars/useCases/userEmail/sendCodeConfirmation";
import { getUserEmailCodeConfirmationController } from "../modules/cars/useCases/userEmail/getUserEmailCodeConfirmation";



const RoutesEmail = Router()

RoutesEmail.post("/sendCode", (request: Request , response: Response): any=>{
    return sendCodeConfirmationController.handle(request, response)
})


RoutesEmail.get("/getCode", (request: Request , response: Response): any=>{
    return getUserEmailCodeConfirmationController.handle(request, response)
})

export {RoutesEmail}