import Image from 'next/image';
import React from 'react';
import headerPic from '@public/laptop.webp';
import styles from '@styles/Header.module.css';

import { HeaderText } from './HeaderText';
import { CTAButton } from './CTAButton';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles['header-image-container']}>
        <Image
          className={styles['header-image']}
          src={headerPic}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
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
