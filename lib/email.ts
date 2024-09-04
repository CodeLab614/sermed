import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SendEmailProps {
  name: string;
  email: string;
  message: string;
}

export const sendEmailContact = async ({
  name,
  email,
  message,
}: SendEmailProps) => {
  await resend.emails.send({
    from: "SERMED <onboarding@resend.dev>",
    to: ["jorgeetrejoo@gmail.com"],
    subject: "Contacto desde la página",
    html: `<div>
    <p>Contacto desde la página</p>
    <ul>
        <li>Nombre: ${name}</li>
        <li>Correo elctrónico: ${email.toLowerCase()}</li>
        <li>Mensaje: ${message}</li>
    </ul>
    </div>`,
  });
};
