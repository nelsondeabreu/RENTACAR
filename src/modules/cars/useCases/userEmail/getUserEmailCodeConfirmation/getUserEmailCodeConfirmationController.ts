import { Request, Response } from "express";
import { GetUserEmailCodeConfirmationUseCase } from "./getUserEmailCodeConfirmationUseCase";



class GetUserEmailCodeConfirmationController {
    constructor(private getUserEmailUseCase: GetUserEmailCodeConfirmationUseCase) {}

    async handle(request: Request , response: Response){
        
        try {
            const {email} = request.body 
            const userEmail = await this.getUserEmailUseCase.execute(email)
            return response.status(200).json(userEmail)
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {GetUserEmailCodeConfirmationController}