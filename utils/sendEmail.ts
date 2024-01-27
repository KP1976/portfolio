'use server';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('senderEmail') as string;
  const message = formData.get('message') as string;
  const name = formData.get('name') as string;

  await resend.emails.send({
    from: `Contact Form from ${name} <onboarding@resend.dev>`,
    to: 'kpawlowski1976@gmail.com',
    subject: 'Message from Contact form',
    reply_to: senderEmail,
    text: message,
  });
};
