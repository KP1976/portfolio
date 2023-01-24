import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '../styles/Technology.module.css';

interface Props {
  image: StaticImageData;
  height?: number;
}

export const Technology = ({ image, height }: Props) => {
  return (
    <li>
      <Image
        className={styles['technology-image']}
        src={image}
        height={height}
        alt=""
      />
    </li>
  );
};
