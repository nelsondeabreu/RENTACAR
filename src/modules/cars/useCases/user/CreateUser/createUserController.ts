import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";



class CreateUserController {
    constructor(private userUseCase: CreateUserUseCase) {}
    async handle(request: Request , response: Response){
        try {
            const {name, email, password, address, admin, driver_license } = request.body
            const user = await this.userUseCase.execute({
                name, email, password, 
                address, admin, driver_license
            })
            return response.status(201).json(user)
        } catch (error) {
            return response.status(404).json({error: error.message})
        }

    }
}

export { CreateUserController }