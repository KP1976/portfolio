import Image from 'next/image';
import React from 'react';
import headerPic from '@public/header.png';
import styles from '@styles/Header.module.css';

import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles['header-image']}
        src={headerPic}
        alt=""
        priority
      />

      <h1 className={styles['header-title']}>
        <span className={styles['header-title-strong']}>
          Nowa Energia w&nbsp;Kodowaniu:{' '}
        </span>
        Twój Następny Junior Front-End Developer!
        <br />
      </h1>

      <p className={styles['header-subtitle']}>
        Czy szukasz kogoś, kto nie tylko dostarczy kod, ale także wniesie świeże
        spojrzenie i&nbsp;energię do zespołu? To ja! Chcę nie tylko rozwijać się
        jako junior front-end developer, ale także przyczyniać się do sukcesów
        Twojej firmy.
      </p>

      <div className={styles.buttons}>
        <a
          className={`${styles['cta-button']} ${styles['cta-button-second']} ${ubuntu.className}`}
          href="#contact"
        >
          zatrudnij mnie
        </a>
        <a
          className={`${styles['cta-button']} ${ubuntu.className}`}
          href="#projects"
        >
          moje prace
        </a>
      </div>
    </header>
  );
};
