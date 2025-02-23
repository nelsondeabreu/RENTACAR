import { Specification } from "@prisma/client";
import { SpecificationRepository } from "../../../repositories/SpecificationRepository";



class ListSpecificationUseCase {
    constructor(private specificationRepsoitory: SpecificationRepository) {
        
    }

    async execute(){
        try {
            const specifications = await this.specificationRepsoitory.allSpecification()
            if (specifications.length === 0) {
                throw new Error("Any Specification found!");
            }
            return specifications;
        } catch (error) {
            throw error
        }
    }
}

export { ListSpecificationUseCase }