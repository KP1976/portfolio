'use server';

import React from 'react';
import { Resend } from 'resend';
import ContactFormEmail from '@email-template/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get('message') as string;
  const senderEmail = formData.get('senderEmail') as string;
  const senderName = formData.get('name') as string;

  if (message === '' || senderEmail === '' || senderName === '') {
    console.error('Wypełnij wszystkie pola!');
    return;
  }

  await resend.emails.send({
    from: `Contact Form from ${senderName} <onboarding@resend.dev>`,
    to: 'kpawlowski1976@gmail.com',
    subject: 'Wiadomość ze strony twojego portfolio',
    reply_to: senderEmail,
    react: React.createElement(ContactFormEmail, {
      message,
      senderName,
      senderEmail,
    }),
  });
};
