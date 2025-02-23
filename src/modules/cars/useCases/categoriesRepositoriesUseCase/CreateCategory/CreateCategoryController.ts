import { Request, Response } from "express";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

class CreateCategoryController {
    constructor(private createCategoryUseCase: CreateCategoryUseCase){}
    async handle(request: Request , response: Response){
        try {
            const { name , description } = request.body
            
            const newUser = await this.createCategoryUseCase.execute({name , description})
            
            return response.status(201).json(newUser)
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {CreateCategoryController}