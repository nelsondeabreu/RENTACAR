import { UserRepository } from "../../../repositories/UserRepository";
import { CreateUserUserCase } from "./createUseruseCase";
import { CreateUserController } from "./createUserController";

const userRepository = new UserRepository()

const createUserUseCase = new CreateUserUserCase(userRepository)

const createUserController = new CreateUserController(createUserUseCase)

export { createUserController }