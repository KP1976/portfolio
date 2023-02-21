import React from 'react';
import CSSlogo from '../public/css3_logo.svg';
import HTMLlogo from '../public/html5_logo.svg';
import JSlogo from '../public/JavaScript_logo.svg';
import MYSQLlogo from '../public/mysql-official.svg';
import NEXTJSlogo from '../public/Next.js_logo.svg';
import NODEJSlogo from '../public/NodeJs_logo.svg';
import Reactlogo from '../public/React_logo.svg';
import SASSlogo from '../public/Sass_logo.svg';
import { TechnologyItem } from './TechnologyItem';

import styles from '../styles/Technology.module.css';

export const TechnologyList = () => {
  return (
    <ul className={styles['technology-list']}>
      <TechnologyItem image={HTMLlogo} height={54} />
      <TechnologyItem image={CSSlogo} height={54} />
      <TechnologyItem image={JSlogo} height={54} />
      <TechnologyItem image={SASSlogo} height={54} />
      <TechnologyItem image={Reactlogo} height={54} />
      <TechnologyItem image={NODEJSlogo} height={54} />
      <TechnologyItem image={MYSQLlogo} height={54} />
      <TechnologyItem image={NEXTJSlogo} height={24} />
    </ul>
  );
};
