import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { SpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificattionController } from "./CreateSpecificationController";

const specificationRepository = new SpecificationRepository()
const specificationUseCase = new SpecificationUseCase(specificationRepository)
const createSpecification = new CreateSpecificattionController(specificationUseCase)


export {createSpecification}