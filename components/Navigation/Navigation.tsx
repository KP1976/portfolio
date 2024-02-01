import React from 'react';
import styles from '@styles/Navigation.module.css';
import { Menu } from './Menu';

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <span className={styles.logo}>kp1976</span>
      <Menu />
    </nav>
  );
};
