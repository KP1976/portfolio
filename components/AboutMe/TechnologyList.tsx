import React from 'react';

import HTMLlogo from '@public/tech-logos/HTML5_logo.png';
import CSSlogo from '@public/tech-logos/CSS3_logo.png';
import JSlogo from '@public/tech-logos/JavaScript_logo.png';
import SASSlogo from '@public/tech-logos/Sass_Logo.png';
import Reactlogo from '@public/tech-logos/React_logo.png';
import NODEJSlogo from '@public/tech-logos/NodeJs_logo.png';
import MYSQLlogo from '@public/tech-logos/mysql-official.png';
import NEXTJSlogo from '@public/tech-logos/Next.png';

import { TechnologyItem } from './TechnologyItem';

import styles from '@styles/Technology.module.css';

const logos = [
  HTMLlogo,
  CSSlogo,
  JSlogo,
  SASSlogo,
  Reactlogo,
  NODEJSlogo,
  MYSQLlogo,
  NEXTJSlogo,
];

export const TechnologyList = () => {
  return (
    <ul className={styles['technology-list']}>
      {logos.map((logo, index) => (
        <TechnologyItem image={logo} key={index} />
      ))}
    </ul>
  );
};
