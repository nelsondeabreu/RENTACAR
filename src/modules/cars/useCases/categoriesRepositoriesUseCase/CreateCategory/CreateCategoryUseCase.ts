import { Category } from "@prisma/client"
import { CategoryRepository } from "../../../repositories/CategoryRepository"
interface IRequest{
    name: string
    description: string
}

class CreateCategoryUseCase{
    
    constructor(private categoryRepository: CategoryRepository){}
   async execute({name , description}: IRequest): Promise<Category>{
        try {
            const categoryAlreadyExist = await this.categoryRepository.verifyName(name)
            if (categoryAlreadyExist) {
                throw new Error("Category already exist!")
            }
            return await this.categoryRepository.create({name , description})
        }   catch (error) {
            throw error;
        }
    }
}

export {CreateCategoryUseCase}



//Na pasta serive é onde criamos os arquivos que vão criar os serviços ou melhor
// onde será feita as validações para depois poder fazer uma determinada acção na tabela.
// Aqui é onde definimos a regra de negocio