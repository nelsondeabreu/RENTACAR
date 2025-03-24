import { EmailVerificationRepository } from "../../../repositories/EmailVerificationRepository";
import { SendCodeConfirmationUseCase } from "./sendCodeConfirmationUseCase";
import { SendCodeConfirmationController } from "./sendCodeConfirmationController";

const emailVerificationRepository = new EmailVerificationRepository();
const sendCodeConfirmationUseCase = new SendCodeConfirmationUseCase(emailVerificationRepository);
const sendCodeConfirmationController = new SendCodeConfirmationController(sendCodeConfirmationUseCase);

export {sendCodeConfirmationController}