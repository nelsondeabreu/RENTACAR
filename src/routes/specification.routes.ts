import { Router , Request , Response } from "express";
import { createSpecification } from "../modules/cars/useCases/specificationUseCase/CreateSpecification";
import { deleteSpecificationController } from "../modules/cars/useCases/specificationUseCase/DeleteSpecification";
import { listSpecificationController } from "../modules/cars/useCases/specificationUseCase/ListSpecification";
const SpecificationRoutes = Router()

SpecificationRoutes.post("/create", (request: Request , response:Response): any=>{
    return createSpecification.handle(request, response)
})

SpecificationRoutes.delete("/delete", (request: Request , response:Response): any=>{
    return deleteSpecificationController.handle(request, response)
})

SpecificationRoutes.get("/list" , (request: Request , response:Response): any=>{
    return listSpecificationController.handle(request, response)
})

export { SpecificationRoutes }
