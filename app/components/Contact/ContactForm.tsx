import React from 'react';

import styles from '../../../styles/ContactForm.module.css';

import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export const ContactForm = () => {
  return (
    <form className={styles['contact-form']}>
      <div className={styles['contact-form-label-and-input']}>
        <label className={styles['contact-form-label']} htmlFor="contact-name">
          Imię
        </label>
        <input
          className={`${styles['contact-form-input']} ${ubuntu.className}`}
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
          type="email"
          id="contact-email"
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
          id="contact-message"
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
