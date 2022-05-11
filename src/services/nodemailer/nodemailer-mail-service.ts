import { MailAdapter, SendMailData } from "../mail-service";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
     auth: {
      user: "31bd67f1ad2774",
      pass: "a02d25a4e17723"
    }
  });

export class NodemailerMailService implements MailAdapter {

    async sendMail({ subject, body } : SendMailData) {
        await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Rafael Borges <rafael.borges2698@gmail.com>',
    subject: subject,
    html: body,
    }
    )}
  }