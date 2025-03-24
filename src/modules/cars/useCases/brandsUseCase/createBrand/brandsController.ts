import { Request, Response } from "express";
import { BrandUseCase } from "./brandsUseCase";




class BrandController {
    constructor(private brandUseCase: BrandUseCase) {}

    async handle(request: Request , response: Response){
        try {
            const {name} = request.body
            await this.brandUseCase.execute(name)

            return response.status(200).json({message: "Brand create successfull."})
        } catch (error) {
            return response.status(404).json({error: error.message})
        }
    }
}

export {BrandController}