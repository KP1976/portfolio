import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '@styles/SocialIcon.module.css';

type Icons = {
  href: string;
  icon: StaticImageData;
};

export const SocialIcon = ({ href, icon }: Icons) => {
  return (
    <Link target="_blank" href={href} rel="noopener noreferrer">
      <Image className={styles['social-icon']} src={icon} alt="" priority />
    </Link>
  );
};
