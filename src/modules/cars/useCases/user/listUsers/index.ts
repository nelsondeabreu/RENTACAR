import { UserRepository } from "../../../repositories/UserRepository";
import { ListUsersUseCase } from "./listUsersUseCase";
import { ListUsersController } from "./listUsersController"

const userRepository = new UserRepository();
const listUsersUseCase = new ListUsersUseCase(userRepository);
const listUsersController = new ListUsersController(listUsersUseCase);

export { listUsersController };