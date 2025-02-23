import { Specification } from "@prisma/client";


interface ISpecificationDTO{
    name: string
    description: string
    car_id: string
}

interface ISpecificationRepository{
    create({name , description , car_id}: ISpecificationDTO): Promise<Specification>;
    findByName(name: string): Promise<Specification>;
    allSpecification(): Promise<Specification[]>;
    delete(id: string): Promise<void>;
}

export {ISpecificationRepository , ISpecificationDTO}