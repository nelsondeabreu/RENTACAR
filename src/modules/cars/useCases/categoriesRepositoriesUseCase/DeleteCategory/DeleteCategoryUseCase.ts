import {CategoryRepository} from "../../../repositories/CategoryRepository"


class DeleteCategoryUseCase{
    constructor(private userRepository: CategoryRepository){}

    async execute(name: string){
        try {
            const category = await this.userRepository.verifyName(name)  

            if (!category) throw new Error("category not found!");
        
            this.userRepository.deleteCategory(name)

        } catch (error) {
            throw error
        }
    }
}

export {DeleteCategoryUseCase}