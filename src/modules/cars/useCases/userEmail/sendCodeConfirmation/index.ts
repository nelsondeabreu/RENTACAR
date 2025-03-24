import { EmailVerificationRepository } from "../../../repositories/UserEmailRepository";
import { SendCodeConfirmationUseCase } from "./sendCodeConfirmationUseCase";
import { SendCodeConfirmationController } from "./sendCodeConfirmationController";
import dotenv from "dotenv";
dotenv.config();

const emailVerificationRepository = new EmailVerificationRepository();
const sendCodeConfirmationUseCase = new SendCodeConfirmationUseCase(emailVerificationRepository);
const sendCodeConfirmationController = new SendCodeConfirmationController(sendCodeConfirmationUseCase);

export {sendCodeConfirmationController}