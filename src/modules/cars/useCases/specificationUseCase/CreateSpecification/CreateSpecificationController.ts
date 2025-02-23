import { Request , Response } from "express";
import { SpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificattionController {
    constructor(private createSpecificationUseCase : SpecificationUseCase) {}
    async handle(request: Request , response: Response){
        try {
            
            const {name , description , car_id} = request.body

            const newSpecification = await this.createSpecificationUseCase.execute({name , description , car_id})
            return response.status(201).send(newSpecification)

        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {CreateSpecificattionController}