import React from 'react';
import Image, { StaticImageData } from 'next/image';

import styles from '../styles/Technology.module.css';

interface Props {
  image: StaticImageData;
  height?: number;
  width?: number;
}

export const Technology = ({ image, height, width }: Props) => {
  return (
    <li>
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
