import React from 'react';
import { TechnologyList } from './TechnologyList';

import styles from '../styles/AboutMe.module.css';

export const AboutMe = () => {
  return (
    <section className={styles['about-me']}>
      <h2 className="section-title">o mnie</h2>

      <p className={styles['about-me-description']}>
        Nazywam się{' '}
        <span className={styles['about-me-description-strong']}>
          Krzysztof Pawłowski
        </span>{' '}
        i&nbsp;jestem na początku kariery programisty JavaScript. Urodziłem się
        w 1976 roku w Szczecinie, a obecnie mieszkam w Warszawie. Chciałbym
        zmienić obecną pracę (przebranżowić się) na{' '}
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
