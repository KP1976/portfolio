import React from 'react';
import styles from '@styles/CTAButton.module.css';

import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({ weight: '700', subsets: ['latin'] });

export const CTAButton = ({
  value,
  href,
  secondButtonStyle,
}: {
  value: string;
  href: string;
  secondButtonStyle?: boolean;
}) => {
  return (
    <>
      {!secondButtonStyle ? (
        <a
          className={`${styles['cta-button']}  ${ubuntu.className}`}
          href={href}
        >
          {value}
        </a>
      ) : (
        <a
          className={`${styles['cta-button']} ${styles['cta-button-second']} ${ubuntu.className}`}
          href={href}
        >
          {value}
        </a>
      )}
    </>
  );
};
