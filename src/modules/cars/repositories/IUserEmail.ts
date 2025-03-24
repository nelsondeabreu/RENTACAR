import { EmailVerification } from "@prisma/client";

interface IUserEmail{
    sendCodeVerification(email: string , code: string): Promise<void>
    getCodeVerification(email: string): Promise<EmailVerification>
    deleteCodeVerification(email: string): Promise<void>
}

export {IUserEmail}