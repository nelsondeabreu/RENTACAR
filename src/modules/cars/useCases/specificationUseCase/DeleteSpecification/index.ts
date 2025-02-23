import { SpecificationRepository } from "../../../repositories/SpecificationRepository";
import { DeleteSpecificationUseCase } from "./deleteSpecificationUseCase";
import { DeleteSpecificationController } from "./deleteSpecificationController";

const specificationRepository = new SpecificationRepository()

const deleteSpecificationUseCase = new DeleteSpecificationUseCase(specificationRepository)

const deleteSpecificationController = new DeleteSpecificationController(deleteSpecificationUseCase)

export { deleteSpecificationController }