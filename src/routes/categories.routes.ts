import { Router , Request , Response } from "express";
import { createCategoryController } from "../modules/cars/useCases/categoriesRepositoriesUseCase/CreateCategory";
import { deleteCategoryController } from "../modules/cars/useCases/categoriesRepositoriesUseCase/DeleteCategory";
import { listCategoriesController } from "../modules/cars/useCases/categoriesRepositoriesUseCase/ListCategories";

const categoriesRoutes = Router()


categoriesRoutes.post("/createuser", (request: Request , response: Response ): any =>{
    return createCategoryController.handle(request, response)
})

categoriesRoutes.get("/listusers" , (request: Request , response: Response): any =>{
    return listCategoriesController.handle(request, response)
})

categoriesRoutes.delete("/deleteuser" , (request: Request , response: Response): any =>{
    return deleteCategoryController.handle(request, response)
})

export {categoriesRoutes}
