import Image, { StaticImageData } from 'next/image';
import React from 'react';

import styles from '../styles/Technology.module.css';

interface Props {
  image: StaticImageData;
  height?: number;
  width?: number;
}

export const TechnologyItem = ({ image, height, width }: Props) => {
  return (
    <li className={styles['technology-item']}>
      <Image
        className={styles['technology-image']}
        src={image}
        height={height}
        width={width}
        alt=""
      />
    </li>
  );
};
