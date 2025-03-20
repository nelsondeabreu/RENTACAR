import { Request, Response } from "express";
import { DeleteUserUseCase } from "./deleteUserUseCase";


class DeleteUserController {
    constructor(private deleteUserUseCase: DeleteUserUseCase) {}
    async handle(request: Request , response: Response){
        try {
            const {email} = request.body
            await this.deleteUserUseCase.execute(email)

            return response.status(200).json({message: "Deleted user successfull."})
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {DeleteUserController}