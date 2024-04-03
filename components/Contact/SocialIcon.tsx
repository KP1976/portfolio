import Link from 'next/link';
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '@styles/SocialIcon.module.css';

type Icons = {
  href: string;
  icon: StaticImageData;
  iconName: string;
};

export const SocialIcon = ({ href, icon, iconName }: Icons) => {
  return (
    <li>
      <Link
        target="_blank"
        href={href}
        rel="noopener noreferrer"
        aria-label="Social Icon"
      >
        <Image
          className={styles['social-icon']}
          src={icon}
          alt={iconName}
          priority
        />
      </Link>
    </li>
  );
};
