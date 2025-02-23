import { PrismaClient, Specification } from "@prisma/client";
import { ISpecificationDTO, ISpecificationRepository } from "./ISpecificationRepository";


class SpecificationRepository implements ISpecificationRepository{
    private prisma: PrismaClient
    constructor(){
         this.prisma = new PrismaClient()
    }
    async create({name , description , car_id}:ISpecificationDTO): Promise<Specification> {

        return await this.prisma.specification.create({
            data:{name, description, car_id}
        })
    }

    async findByName(name: string): Promise<Specification> {
        return await this.prisma.specification.findUnique({ where:{name} })
    }

    async allSpecification(): Promise<Specification[]> {
        return await this.prisma.specification.findMany()
    }

    async delete(id: string): Promise<void> {
        await this.prisma.specification.delete({ where:{id}})
    }
}

export {SpecificationRepository}