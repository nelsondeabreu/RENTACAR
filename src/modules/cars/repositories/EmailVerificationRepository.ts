import { EmailVerification , PrismaClient } from "@prisma/client";
import { IEmailVerification } from "./IemailVerificarion";



class EmailVerificationRepository implements IEmailVerification {
    private prismaCliente = new PrismaClient
    constructor( ) {}

    async createEmailVerification(email: string, code: string): Promise<void> {
        await this.prismaCliente.emailVerification.create({data: {email , code},})
    }
    async getEmailVerification(email: string): Promise<EmailVerification> {
        return await this.prismaCliente.emailVerification.findUnique({ where: { email } })
    }
    async deleteEmailVerification(email: string): Promise<void> {
        await this.prismaCliente.emailVerification.delete( {where: {email} } )
    }
}

export {EmailVerificationRepository}