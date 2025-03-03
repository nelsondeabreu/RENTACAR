import { Request, Response } from "express";
import { UpdateUserUseCase } from "./updateUserUseCase";





class UpdateUserController {
    constructor(private updateUserUseCase: UpdateUserUseCase) {}

    async handle(request: Request , response: Response){
        try {
            const { id, name, driver_license , address , admin} = request.body
            const userUpdate = await this.updateUserUseCase.execute({id, data:{name , driver_license , address , admin}})
            return response.status(200).json(userUpdate)

        } catch (error) {
            return response.status(400).json({error: error.message})
        }
    }
}

export { UpdateUserController }