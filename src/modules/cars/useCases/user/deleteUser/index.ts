import { UserRepository } from "../../../repositories/UserRepository";
import { DeleteUserUseCase } from "./deleteUserUseCase";
import { DeleteUserController } from "./deleteUserController";

const userRepository = new UserRepository();
const deleteUserUseCase = new DeleteUserUseCase(userRepository);
const deleteUserController = new DeleteUserController(deleteUserUseCase)

export {deleteUserController}