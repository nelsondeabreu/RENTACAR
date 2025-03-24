import { Router , Request , Response } from "express";
import { sendCodeConfirmationController } from "../modules/cars/useCases/user/sendCodeConfirmation";



const RoutesEmail = Router()

RoutesEmail.post("/create", (request: Request , response: Response): any=>{
    return sendCodeConfirmationController.handle(request, response)
})



export {RoutesEmail}