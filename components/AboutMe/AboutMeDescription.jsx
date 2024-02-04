import React from 'react';

import styles from '@styles/AboutMeDescription.module.css';

export const AboutMeDescription = () => {
  return (
    <p className={styles['about-me-description']}>
      Nazywam się{' '}
      <span className={styles['about-me-description-strong']}>
        Krzysztof Pawłowski
      </span>{' '}
      i&nbsp;jestem na początku kariery programisty. Chciałbym zmienić obecną
      pracę (przebranżowić się) na&nbsp;
      <span className={styles['about-me-description-strong']}>
        Junior Front-End Developera.
      </span>
      <br />
      <br />
      Poniżej znajduje się lista technologii jakich używam w swoich projektach.
      Chociaż moje portfolio może być niewielkie, to moje podejście do kodowania
      jest pełne zaangażowania. Chcę nie tylko tworzyć strony internetowe, ale
      także uczestniczyć w&nbsp;tworzeniu doświadczeń, które wyróżniają się.
    </p>
  );
};
