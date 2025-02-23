import { Request , Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";


class DeleteCategoryConroller {
    constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}
    
    async handle(request: Request , response: Response){
        try {

            const {name} = request.body
            await this.deleteCategoryUseCase.execute(name)
            return response.status(200).json({message: "Category deleted with successfully!"})

        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {DeleteCategoryConroller}