import { PrismaClient, Category } from "@prisma/client";
import { ICategoriesRepository, IcreatedCategoryDTO } from "./ICategoriesRepository";

export class CategoryRepository implements ICategoriesRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    // ✅ Criar uma categoria
    async create({ name, description  }: IcreatedCategoryDTO): Promise<Category> {
        return await this.prisma.category.create({
            data: { name, description , created_at: new Date().toLocaleDateString()},
        });
    }

    // ✅ Buscar todas as categorias
    async getAll(): Promise<Category[]> {
        return await this.prisma.category.findMany();
    }

    // ✅ Verificar se um nome já existe no banco
    async verifyName(name: string): Promise<Category> {
        const category = await this.prisma.category.findUnique({
            where: { name },
        });
        return category; 
    }

    // ✅ Deletar uma categoria pelo nome
    async deleteCategory(name: string): Promise<void> {
        await this.prisma.category.delete({
            where: { name },
        });
    }
}



//Neste arquivo é onde acessamos a base de dados e definimos as acções da nossa tabela(Repositorio).