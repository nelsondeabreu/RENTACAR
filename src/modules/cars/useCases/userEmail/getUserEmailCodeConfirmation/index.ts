import { EmailVerificationRepository } from "../../../repositories/UserEmailRepository";
import { GetUserEmailCodeConfirmationUseCase } from "./getUserEmailCodeConfirmationUseCase";
import { GetUserEmailCodeConfirmationController } from "./getUserEmailCodeConfirmationController";

const emailRepository = new EmailVerificationRepository();
const getUserEmailCodeConfirmationUseCase = new GetUserEmailCodeConfirmationUseCase(emailRepository);
const getUserEmailCodeConfirmationController = new GetUserEmailCodeConfirmationController(getUserEmailCodeConfirmationUseCase);

export {getUserEmailCodeConfirmationController};