import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EmailVerificationRepository } from "../../../repositories/EmailVerificationRepository";

class SendCodeConfirmationUseCase {
    constructor(private emailVerificationRepository: EmailVerificationRepository) {}

    async execute( newEmail: string ){

        try {
            if (!newEmail) {
                return NextResponse.json({ error: "E-mail obrigatório!" }, { status: 400 });
            }
    
            const code = Math.floor(100000 + Math.random() * 900000).toString();

            const emailVerification = await this.emailVerificationRepository.getEmailVerification(newEmail)
            if (emailVerification) {
                return NextResponse.json({error: "Já recebeu código , verifique seu email."},
                    {status: 429}
                )
            }
    
            await this.emailVerificationRepository.createEmailVerification(newEmail, code)

            setTimeout(async ()=>{
                await this.emailVerificationRepository.deleteEmailVerification(newEmail)
            },1 * 60 * 1000)
    
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL_USER,
                  pass: process.env.EMAIL_PASS,
                },
              });
            
              await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: newEmail,
                subject: "Código de Confirmação",
                text: `Seu código de confirmação é: ${code}`,
              });
              console.log("📩 E-mail enviado com sucesso para:", newEmail);
            
              return NextResponse.json({ message: "Código enviado!"});
        } catch (error) {
            throw error
        }  

    }
}

export {SendCodeConfirmationUseCase}