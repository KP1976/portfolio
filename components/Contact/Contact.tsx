import React from 'react';
import { ContactForm } from './ContactForm';

import styles from '@styles/Contact.module.css';
import { SectionTitle } from '@components/SectionTitle';
import { Email } from './Email';
import { SocialIconsList } from './SocialIconsList';

export const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <SectionTitle title="Kontakt" />
      <h3 className={styles['contact-subtitle']}>
        Masz do mnie jakieś pytania? Pisz pod poniższy adres lub skorzystaj
        z&nbsp;formularza kontaktowego
      </h3>
      <Email />
      <SocialIconsList />
      <ContactForm />
    </section>
  );
};
