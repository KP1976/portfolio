import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from '@styles/Technology.module.css';

interface Props {
  image: StaticImageData;
}

export const TechnologyItem = ({ image }: Props) => {
  return (
    <li className={styles['technology-item']}>
      <Image className={styles['technology-image']} src={image} alt="" />
    </li>
  );
};
