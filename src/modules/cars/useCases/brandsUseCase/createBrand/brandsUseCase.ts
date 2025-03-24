import { BrandRepository } from "../../../repositories/BrandRepository";


class BrandUseCase {
    constructor(private brandRepository: BrandRepository) {}

    async execute(name: string){

        try {
            const brandAlreadyExists = await this.brandRepository.getBrand(name)

            if (brandAlreadyExists) { throw new Error("Brand already exists."); } 
            await this.brandRepository.createBrand(name)

        } catch (error) {
            throw error
        }
    }
}

export {BrandUseCase}