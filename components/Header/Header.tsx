import Image from 'next/image';
import React from 'react';
import headerPic from '@public/laptop.png';
import styles from '@styles/Header.module.css';

import { HeaderText } from './HeaderText';
import { CTAButton } from './CTAButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles['header-image']}
        src={headerPic}
        alt=""
        priority
      />
      <HeaderText />

      <div className={styles.buttons}>
        <CTAButton value="projekty" href="#projects" />
        <CTAButton
          value="zatrudnij mnie"
          href="#contact"
          secondButtonStyle={true}
        />
      </div>
    </header>
  );
};
