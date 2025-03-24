import { Brand } from "@prisma/client"


interface IBrandRepository{
    createBrand(name: string): Promise<void>
    updateBrand(name: string): Promise<void>
    getBrand(name: string): Promise<Brand>
    delete(name: string, data: string): Promise<void>
    listBrand(): Promise<Brand[]>
}

export {IBrandRepository}