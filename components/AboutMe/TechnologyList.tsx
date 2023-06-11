import React from 'react';

import HTMLlogo from '@public/html5_logo.svg';
import CSSlogo from '@public/css3_logo.svg';
import JSlogo from '@public/JavaScript_logo.svg';
import SASSlogo from '@public/Sass_logo.svg';
import Reactlogo from '@public/React_logo.svg';
import NODEJSlogo from '@public/NodeJs_logo.svg';
import MYSQLlogo from '@public/mysql-official.svg';
import NEXTJSlogo from '@public/Next.js_logo.svg';

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
