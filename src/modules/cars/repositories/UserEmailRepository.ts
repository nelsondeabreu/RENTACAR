import { EmailVerification , PrismaClient } from "@prisma/client";
import { IUserEmail } from "./IUserEmail";



class EmailVerificationRepository implements IUserEmail {
    private prismaCliente = new PrismaClient
    constructor( ) {}

    async sendCodeVerification(email: string, code: string): Promise<void> {
        await this.prismaCliente.emailVerification.create({data: {email , code},})
    }
    async getCodeVerification(email: string): Promise<EmailVerification> {
        return await this.prismaCliente.emailVerification.findUnique({ where: { email } })
    }
    async deleteCodeVerification(email: string): Promise<void> {
        await this.prismaCliente.emailVerification.delete( {where: {email} } )
    }

}

export {EmailVerificationRepository}