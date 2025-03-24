import nodemailer from "nodemailer";
import { EmailVerificationRepository } from "../../../repositories/UserEmailRepository";

class SendCodeConfirmationUseCase {
    constructor(private emailVerificationRepository: EmailVerificationRepository) {}

    async execute( newEmail: string ){

        try {
            if (!newEmail) { throw new Error("E-mail obrigatorio."); };

            const emailVerification = await this.emailVerificationRepository.getCodeVerification(newEmail)
            if (emailVerification) { throw new Error("Já recebeu código , verifique seu email."); }

            const code = Math.floor(100000 + Math.random() * 900000).toString();
    
            await this.emailVerificationRepository.sendCodeVerification(newEmail, code)

            setTimeout(async ()=>{
                console.log("⏳ Código expirado. Excluindo do banco...");
                await this.emailVerificationRepository.deleteCodeVerification(newEmail)
            },1 * 60 * 1000)

            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS ? "OK" : "NÃO DEFINIDO",
                },
              });
            
              await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: newEmail,
                subject: "Código de Confirmação",
                text: `Seu código de confirmação é: ${code}`,
              });

              return { message: "Código enviado com sucesso!" };

              
        } catch (error) {
            throw error
        }  

    }
}

export {SendCodeConfirmationUseCase}