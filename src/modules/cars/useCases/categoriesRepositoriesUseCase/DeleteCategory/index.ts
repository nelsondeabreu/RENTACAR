import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";
import { DeleteCategoryConroller } from "./DeleteCategoryController";


const categoryRepository = new CategoryRepository()
const deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepository)

const deleteCategoryController = new DeleteCategoryConroller(deleteCategoryUseCase)

export { deleteCategoryController }