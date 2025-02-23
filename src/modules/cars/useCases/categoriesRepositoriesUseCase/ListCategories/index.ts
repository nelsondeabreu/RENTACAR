import { CategoryRepository } from "../../../repositories/CategoryRepository";
import { ListCategoriesUseCase } from "./ListCategporiesUseCase";
import { ListCategoriesController } from "./ListCategoriesController";

const categoryRepository = new CategoryRepository()

const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase)

export { listCategoriesController }