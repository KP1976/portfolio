import React from 'react';
import styles from '../styles/Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <span className={styles.logo}>kp1976</span>
      <ul className={styles.menu}>
        <li className={styles['menu-item']}>
          <a className={styles['menu-item-link']} href="#about">
            O mnie
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a className={styles['menu-item-link']} href="#contact">
            Kontakt
          </a>
        </li>
        <li className={styles['menu-item']}>
          <a
            className={styles['menu-item-link']}
            href="cv2023.pdf"
            download={'cv2023.pdf'}
          >
            Moje CV
          </a>
        </li>
      </ul>
    </nav>
  );
};
