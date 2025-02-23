import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { PrismaClient } from "@prisma/client";




class DeleteSpecificationUseCase {
    private prisma: PrismaClient
    constructor(private specificationRepository: SpecificationRepository) {
        this.prisma = new PrismaClient()
    }

    async execute(id: string){
        try {
            const specification = await this.prisma.specification.findUnique({where: {id}})

            if (!specification) {
                throw new Error("specification not found!");
                
            }

            await this.specificationRepository.delete(id)

        } catch (error) {
            throw error
        }
    }
}

export { DeleteSpecificationUseCase }