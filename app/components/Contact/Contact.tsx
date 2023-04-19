import Link from 'next/link';
import React from 'react';
import { ContactForm } from './ContactForm';

import {
  faFacebook,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <FontAwesomeIcon
            className={styles['social-icon']}
            icon={faFacebook}
            color="#FFFFFF"
            title="facebook"
          />
        </Link>
        <Link
          target="_blank"
          href="https://github.com/KP1976"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={styles['social-icon']}
            icon={faGithub}
            color="#FFFFFF"
            title="github"
          />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/krzysztof-paw%C5%82owski-74aa01154/"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={styles['social-icon']}
            icon={faLinkedin}
            color="#FFFFFF"
            title="linkedin"
          />
        </Link>
      </div>

      <ContactForm />
    </section>
  );
};
