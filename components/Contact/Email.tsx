import Link from 'next/link';
import React from 'react';

import styles from '@styles/Email.module.css';

export const Email = () => {
  return (
    <div className={styles['email-wrapper']}>
      <h4 className={styles['email-title']}>e-mail:</h4>
      <Link className={styles.email} href="mailto:kpawlowski1976@gmail.com">
        kpawlowski1976@gmail.com
      </Link>
    </div>
  );
};
