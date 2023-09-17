import React from 'react';
import { TechnologyList } from './TechnologyList';

import styles from '@styles/AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={styles['about-me']} id="about">
      <h2 className="section-title">o mnie</h2>

      <p className={styles['about-me-description']}>
        Nazywam się{' '}
        <span className={styles['about-me-description-strong']}>
          Krzysztof Pawłowski
        </span>{' '}
        i&nbsp;jestem na początku kariery programisty JavaScript. Urodziłem się
        w&nbsp;1976 roku w&nbsp;Szczecinie, a&nbsp;obecnie mieszkam
        w&nbsp;Warszawie. Chciałbym&nbsp;zmienić obecną pracę (przebranżowić
        się) na&nbsp;
        <span className={styles['about-me-description-strong']}>
          Junior Front-End Developera.
        </span>
        <br />
        <br />W swoich pracach używam następujących technologii:
      </p>

      <TechnologyList />
    </section>
  );
};
