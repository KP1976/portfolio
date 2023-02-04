import Link from 'next/link';
import React from 'react';
import styles from '../styles/Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <span className={styles.logo}>kp1976</span>
      <ul className={styles.menu}>
        <li className={styles['menu-item']}>
          <Link className={styles['menu-item-link']} href="#about">
            O mnie
          </Link>
        </li>
        <li className={styles['menu-item']}>
          <Link className={styles['menu-item-link']} href="#contact">
            Kontakt
          </Link>
        </li>
        <li className={styles['menu-item']}>
          <Link className={styles['menu-item-link']} href="#cv">
            Moje CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};
