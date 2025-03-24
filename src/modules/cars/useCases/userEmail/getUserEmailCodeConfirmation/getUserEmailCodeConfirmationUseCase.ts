import { EmailVerificationRepository } from "../../../repositories/UserEmailRepository";



class GetUserEmailCodeConfirmationUseCase {
    constructor(private emailRepository: EmailVerificationRepository) {}

    async execute(email: string){
        try {
            const userEmail = await this.emailRepository.getCodeVerification(email);
            if (!userEmail) {throw new Error("User not found.");}

            return userEmail
        } catch (error) {
            throw error
        }
    }
}

export {GetUserEmailCodeConfirmationUseCase}