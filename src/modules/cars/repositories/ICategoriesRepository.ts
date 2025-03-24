import { Category } from "@prisma/client";


interface IcreatedCategoryDTO{
    name: string,
    description: string
} 


interface ICategoriesRepository {
    create({name , description}: IcreatedCategoryDTO): Promise<Category>; // Retorna a categoria criada
    getAll(): Promise<Category[]>; // Retorna um array de categorias
    verifyName(name: string): Promise<Category>; // Retorna o registro se existir se não retorna null
    deleteCategory(name: string): Promise<void>; // Não precisa de retorno
}

export { ICategoriesRepository ,  IcreatedCategoryDTO }