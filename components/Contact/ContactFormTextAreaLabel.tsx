'use client';

import React from 'react';
import styles from '@styles/ContactForm.module.css';
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

type ContactFormProps = {
  value: string;
  htmlFor: string;
  name: string;
  id: string;
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
};

export const ContactFormTextAreaLabel = ({
  value,
  htmlFor,
  name,
  id,
  textAreaRef,
}: ContactFormProps) => {
  return (
    <div className={styles['contact-form-label-and-input']}>
      <label className={styles['contact-form-label']} htmlFor={htmlFor}>
        {value}
      </label>
      <textarea
        className={`${styles['contact-form-message']} ${ubuntu.className}`}
        name={name}
        id={id}
        ref={textAreaRef}
      />
    </div>
  );
};
