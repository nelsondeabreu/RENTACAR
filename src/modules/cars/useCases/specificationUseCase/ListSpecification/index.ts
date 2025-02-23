import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { ListSpecificationUseCase } from "./listSpecificatonUseCase";
import { ListSpecificationController } from "./listSpecificatonController";

const specificationRepository = new SpecificationRepository()

const listSpecificationUseCase = new ListSpecificationUseCase(specificationRepository)

const listSpecificationController = new ListSpecificationController(listSpecificationUseCase)

export { listSpecificationController }