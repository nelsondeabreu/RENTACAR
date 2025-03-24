import { Request, Response } from "express";
import { SendCodeConfirmationUseCase } from "./sendCodeConfirmationUseCase";



class SendCodeConfirmationController {
    constructor(private updateEmailUseCase: SendCodeConfirmationUseCase) {}

    async handle(request: Request , response: Response){
        try {
            const {newEmail} = request.body
            await this.updateEmailUseCase.execute(newEmail)
            return response.status(200).json({message: "confirme o codigo enviado no seu novo email."})
        } catch (error) {
            return response.status(400).json({error: error.message})
        }
    }
}

export {SendCodeConfirmationController}