import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ContactForm } from './ContactForm';

import facebookIcon from '../../../public/facebook.png';
import githubIcon from '../../../public/github.png';
import linkedinIcon from '../../../public/linkedin.png';

import styles from '../../../styles/Contact.module.css';

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles['contact-flare']}></div>
      <h2 className="section-title">kontakt</h2>
      <h3 className={styles['contact-subtitle']}>
        Masz do mnie jakieś pytania? Pisz pod poniższy adres lub skorzystaj
        z&nbsp;formularza kontaktowego
      </h3>

      <div className={styles['email-wrapper']}>
        <p className={styles['email-title']}>e-mail:</p>
        <Link className={styles.email} href="mailto:kpawlowski1976@gmail.com">
          kpawlowski1976@gmail.com
        </Link>
      </div>

      <div className={styles['social-icons']}>
        <Image
          className={styles['social-icon']}
          src={facebookIcon}
          alt="facebook"
        />
        <Image
          className={styles['social-icon']}
          src={githubIcon}
          alt="github"
        />
        <Image
          className={styles['social-icon']}
          src={linkedinIcon}
          alt="linkedin"
        />
      </div>

      <ContactForm />
    </section>
  );
};
