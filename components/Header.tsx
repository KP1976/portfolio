import Image from 'next/image';
import React from 'react';
import headerPic from '@public/laptop.png';
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
        Nowa Energia w&nbsp;Kodowaniu:{' '}
      </h1>
      <h2 className={styles['header-subtitle']}>
        Twój Następny Junior Front-End Developer!
      </h2>

      <p className={styles['header-description']}>
        Czy szukasz kogoś, kto nie tylko dostarczy kod, ale także wniesie świeże
        spojrzenie i&nbsp;energię do zespołu? To ja! Chcę rozwijać się jako
        junior front-end developer oraz przyczyniać się do sukcesów Twojej
        firmy.
      </p>

      <div className={styles.buttons}>
        <a
          className={`${styles['cta-button']}  ${ubuntu.className}`}
          href="#projects"
        >
          projekty
        </a>
        <a
          className={`${styles['cta-button']} ${styles['cta-button-second']} ${ubuntu.className}`}
          href="#contact"
        >
          zatrudnij mnie
        </a>
      </div>
    </header>
  );
};
