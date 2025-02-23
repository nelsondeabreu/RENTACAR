import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./listSpecificatonUseCase";



class ListSpecificationController {
    constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}

    async handle(request: Request , response: Response){
        try {
            const specifications = await this.listSpecificationUseCase.execute()
            return response.status(200).json(specifications)
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export { ListSpecificationController }