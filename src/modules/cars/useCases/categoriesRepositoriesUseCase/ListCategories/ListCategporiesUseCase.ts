import { CategoryRepository } from "../../../repositories/CategoryRepository";


class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoryRepository) {}

    async execute(){
        try {
            const categories = await this.categoriesRepository.getAll()
            if (!categories) {
                throw new Error("Any Categories Found.")
            }
            return categories
        } catch (error) {
            throw error
        }
        
    }
}

export { ListCategoriesUseCase }