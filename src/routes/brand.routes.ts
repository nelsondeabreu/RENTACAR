import { Router , Request , Response } from "express";
import { brandsController } from "../modules/cars/useCases/brandsUseCase/createBrand";


const BrandRoutes = Router()

BrandRoutes.post("/create", (request: Request , response: Response): any=>{
    return brandsController.handle(request, response)
})


export {BrandRoutes}