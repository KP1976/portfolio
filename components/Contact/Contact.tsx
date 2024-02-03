import Link from 'next/link';
import React from 'react';
import { ContactForm } from './ContactForm';
import Image from 'next/image';

import facebookIcon from '@public/facebook.png';
import githubIcon from '@public/github.png';
import linkedinIcon from '@public/linkedin.png';

import styles from '@styles/Contact.module.css';
import { SectionTitle } from '@components/SectionTitle';

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <SectionTitle title="Kontakt" />
      <h3 className={styles['contact-subtitle']}>
        Masz do mnie jakieś pytania? Pisz pod poniższy adres lub skorzystaj
        z&nbsp;formularza kontaktowego
      </h3>

      <div className={styles['email-wrapper']}>
        <h4 className={styles['email-title']}>e-mail:</h4>
        <Link className={styles.email} href="mailto:kpawlowski1976@gmail.com">
          kpawlowski1976@gmail.com
        </Link>
      </div>

      <div className={styles['social-icons']}>
        <Link
          target="_blank"
          href="https://www.facebook.com/KP1976PL"
          rel="noopener noreferrer"
        >
          <Image
            className={styles['social-icon']}
            src={facebookIcon}
            alt=""
            priority
          />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/KP1976"
          rel="noopener noreferrer"
        >
          <Image
            className={styles['social-icon']}
            src={githubIcon}
            alt="github"
            priority
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/krzysztof-paw%C5%82owski-74aa01154/"
          rel="noopener noreferrer"
        >
          <Image
            className={styles['social-icon']}
            src={linkedinIcon}
            alt="github"
            priority
          />
        </Link>
      </div>

      <ContactForm />
    </section>
  );
};
