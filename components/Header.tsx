import Image from 'next/image';
import React from 'react';
import headerPic from '@public/header.png';
import styles from '@styles/Header.module.css';

import { Ubuntu } from '@next/font/google';

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
        Chcesz zatrudnić junior front-end developera?
        <br />
        <span className={styles['header-title-strong']}>Daj mi szansę!</span>
      </h1>

      <p className={styles['header-subtitle']}>
        Od kilku lat programuję w języku{' '}
        <span className={styles['header-title-strong']}>JavaScript.</span>{' '}
        Zajmuję się również projektowaniem stron internetowych. Umieściłem kilka
        swoich prac, które mogą Cię zainteresować.
      </p>

      <div className={styles.buttons}>
        <a
          className={`${styles['cta-button']} ${ubuntu.className}`}
          href="#projects"
        >
          moje prace
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
