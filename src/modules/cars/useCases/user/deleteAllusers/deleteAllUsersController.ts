import { Request, Response } from "express";
import { DeleteAllUsersUseCase } from "./deleteAllUsersUsecase";


class DeleteAllUsersController {
    constructor(private deleteAllUsersUseCase: DeleteAllUsersUseCase) { }

    async handle(request: Request , response: Response){
        try {
            await this.deleteAllUsersUseCase.execute()
            return response.status(200).json({message: "deleted all users successfull."})
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {DeleteAllUsersController}