import { UserRepository } from "../../../repositories/UserRepository";
import { DeleteAllUsersUseCase } from "./deleteAllUsersUsecase";
import { DeleteAllUsersController } from "./deleteAllUsersController";

const userRepository = new UserRepository();
const deleteAllUsersUseCase = new DeleteAllUsersUseCase(userRepository);
const deleteAllUsersController = new DeleteAllUsersController(deleteAllUsersUseCase);

export {deleteAllUsersController}