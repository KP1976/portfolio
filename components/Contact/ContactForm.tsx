'use client';

import React, { useRef } from 'react';

import styles from '@styles/ContactForm.module.css';

import { Ubuntu } from 'next/font/google';
import { sendEmail } from '@utils/sendEmail';
import { toast } from 'sonner';

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
      }}
    >
      <div className={styles['contact-form-label-and-input']}>
        <label className={styles['contact-form-label']} htmlFor="contact-name">
          Imię
        </label>
        <input
          className={`${styles['contact-form-input']} ${ubuntu.className}`}
          name="name"
          type="text"
          id="contact-name"
          ref={nameRef}
        />
      </div>

      <div className={styles['contact-form-label-and-input']}>
        <label className={styles['contact-form-label']} htmlFor="contact-email">
          Adres email
        </label>
        <input
          className={styles['contact-form-input']}
          name="senderEmail"
          type="email"
          id="contact-email"
          ref={emailRef}
        />
      </div>

      <div className={styles['contact-form-label-and-input']}>
        <label
          className={styles['contact-form-label']}
          htmlFor="contact-message"
        >
          Wiadomość
        </label>
        <textarea
          className={`${styles['contact-form-message']} ${ubuntu.className}`}
          name="message"
          id="contact-message"
          ref={messageRef}
        />
      </div>

      <button
        type="submit"
        className={`${styles['contact-form-button']} ${ubuntu.className}`}
        onClick={() => {
          if (
            nameRef.current?.value === '' ||
            emailRef.current?.value === '' ||
            messageRef.current?.value === ''
          ) {
            toast.error('Wypełnij wszystkie pola!');
          } else {
            toast.success('Wiadomość została wysłana!');
          }

          if (nameRef.current) {
            nameRef.current.value = '';
          }
          if (emailRef.current) {
            emailRef.current.value = '';
          }
          if (messageRef.current) {
            messageRef.current.value = '';
          }
        }}
      >
        wyślij wiadomość
      </button>
    </form>
  );
};
