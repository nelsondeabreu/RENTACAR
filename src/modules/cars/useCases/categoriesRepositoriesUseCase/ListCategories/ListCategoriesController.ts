import { Request , Response } from "express";
import { ListCategoriesUseCase } from "./ListCategporiesUseCase";


class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

    async handle(request: Request , response: Response){
        try {
            const allCategories = await this.listCategoriesUseCase.execute()
            return response.status(200).json(allCategories)
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
        
    }
}

export { ListCategoriesController }