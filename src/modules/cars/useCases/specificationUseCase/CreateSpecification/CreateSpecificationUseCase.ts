import { SpecificationRepository } from "../../../repositories/SpecificationRepository"
import { PrismaClient } from "@prisma/client"
interface IRequest{
    name: string,
    description: string,
    car_id: string
}


class SpecificationUseCase {
    private prisma: PrismaClient
    constructor(private specificationRepository: SpecificationRepository) {
        this.prisma = new PrismaClient()
    }

    async execute({name , description , car_id}: IRequest){
        try {
            const specificationAlreadyExist = await this.specificationRepository.findByName(name)
            const carAlreadyExists = await this.prisma.car.findUnique({where: {id: car_id}})

            if (!carAlreadyExists) {
                throw new Error("Car not found!");
            }
            if (specificationAlreadyExist) {
                throw new Error("Specification already exist!");
            }
            return await this.specificationRepository.create({name , description , car_id})

        } catch (error) {
            throw error
        }
    }
}

export {SpecificationUseCase}