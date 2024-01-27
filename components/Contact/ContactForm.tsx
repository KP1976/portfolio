'use client';

import React from 'react';

import styles from '@styles/ContactForm.module.css';

import { Ubuntu } from 'next/font/google';
import { sendEmail } from '@utils/sendEmail';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export const ContactForm = () => {
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
          required
          maxLength={100}
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
          required
          maxLength={5000}
        />
      </div>

      <button
        type="submit"
        className={`${styles['contact-form-button']} ${ubuntu.className}`}
      >
        wyślij wiadomość
      </button>
    </form>
  );
};
