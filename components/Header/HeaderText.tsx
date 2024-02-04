import React from 'react';
import styles from '@styles/HeaderText.module.css';

export const HeaderText = () => {
  return (
    <>
      <h1 className={styles['header-title']}>
        Nowa Energia w&nbsp;Kodowaniu:{' '}
      </h1>
      <h2 className={styles['header-subtitle']}>
        Twój Następny Junior Front-End Developer!
      </h2>

      <p className={styles['header-description']}>
        Czy szukasz kogoś, kto nie tylko dostarczy kod, ale także wniesie świeże
        spojrzenie i&nbsp;energię do zespołu? To ja! Chcę rozwijać się jako
        junior front-end developer oraz przyczyniać się do sukcesów Twojej
        firmy.
      </p>
    </>
  );
};
