import { EmailVerification } from "@prisma/client";

interface IEmailVerification{
    createEmailVerification(email: string , code: string): Promise<void>
    getEmailVerification(email: string): Promise<EmailVerification>
    deleteEmailVerification(email: string): Promise<void>
}

export {IEmailVerification}