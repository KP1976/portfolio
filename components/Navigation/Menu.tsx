import React from 'react';
import styles from '@styles/Menu.module.css';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <ul className={styles.menu}>
      <MenuItem value="O mnie" href="#about" />
      <MenuItem value="Kontakt" href="#contact" />
      <MenuItem
        value="Moje CV"
        href="cv2023.pdf"
        download="cv2023.pdf"
        target="_blank"
        title="CV - PDF format file"
      />
    </ul>
  );
};
