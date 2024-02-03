'use client';

import React from 'react';
import styles from '@styles/ContactForm.module.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

type ContactFormProps = {
  value: string;
  htmlFor: string;
  name: string;
  type: string;
  id: string;
  inputRef: React.RefObject<HTMLInputElement>;
};

export const ContactFormInputLabel = ({
  value,
  htmlFor,
  name,
  type,
  id,
  inputRef,
}: ContactFormProps) => {
  return (
    <div className={styles['contact-form-label-and-input']}>
      <label className={styles['contact-form-label']} htmlFor={htmlFor}>
        {value}
      </label>
      <input
        className={`${styles['contact-form-input']} ${ubuntu.className}`}
        name={name}
        type={type}
        id={id}
        ref={inputRef}
      />
    </div>
  );
};
