import { Brand, PrismaClient } from "@prisma/client";
import { IBrandRepository } from "./IBrandRepository";


class BrandRepository implements IBrandRepository {
    private prisma = new PrismaClient()
    constructor() { }

    async createBrand(name: string): Promise<void> {
        await this.prisma.brand.create({data: {name}})
    }

    async updateBrand(name: string): Promise<void> {
        await this.prisma.brand.update({where: {name}, data:{name}})
    }

    async delete(name: string): Promise<void> {
        await this.prisma.brand.delete({where: {name}})
    }

    async getBrand(name: string): Promise<Brand> {
        return await this.prisma.brand.findUnique({where: {name}})
    }

    async listBrand(): Promise<Brand[]> {
        return await this.prisma.brand.findMany()
    }
}

export {BrandRepository}