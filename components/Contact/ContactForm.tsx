'use client';

import React, { useRef } from 'react';
import styles from '@styles/ContactForm.module.css';
import { Ubuntu } from 'next/font/google';
import { sendEmail } from '@utils/sendEmail';
import { ContactFormInputLabel } from './ContactFormInputLabel';
import { ContactFormTextAreaLabel } from './ContactFormTextAreaLabel';
import { clearInputs } from '@utils/clearInputs';
import { toastNotification } from '@utils/notification';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export const ContactForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  return (
    <form
      className={styles['contact-form']}
      action={async (formData) => {
        await sendEmail(formData);

        clearInputs(nameRef, emailRef, messageRef);
      }}
    >
      <ContactFormInputLabel
        value="Imię"
        htmlFor="contact-name"
        name="name"
        type="text"
        id="contact-name"
        inputRef={nameRef}
      />

      <ContactFormInputLabel
        value="Email"
        htmlFor="contact-email"
        name="senderEmail"
        type="email"
        id="contact-email"
        inputRef={emailRef}
      />

      <ContactFormTextAreaLabel
        value="Wiadomość"
        htmlFor="contact-message"
        name="message"
        id="contact-message"
        textAreaRef={messageRef}
      />

      <button
        type="submit"
        className={`${styles['contact-form-button']} ${ubuntu.className}`}
        onClick={() => toastNotification(nameRef, emailRef, messageRef)}
      >
        wyślij wiadomość
      </button>
    </form>
  );
};
