import { BrandRepository } from "../../../repositories/BrandRepository";
import { BrandUseCase } from "./brandsUseCase";
import { BrandController } from "./brandsController";


const brandRepository = new BrandRepository();
const brandsUseCase = new BrandUseCase(brandRepository);
const brandsController = new BrandController(brandsUseCase);

export {brandsController}