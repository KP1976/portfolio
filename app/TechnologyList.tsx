import React from 'react';
import { Technology } from './Technology';
import HTMLlogo from '../public/html5_logo.svg';
import CSSlogo from '../public/css3_logo.svg';
import JSlogo from '../public/JavaScript_logo.svg';
import SASSlogo from '../public/Sass_logo.svg';
import Reactlogo from '../public/React_logo.svg';
import NODEJSlogo from '../public/NodeJs_logo.svg';
import MYSQLlogo from '../public/mysql-official.svg';
import NEXTJSlogo from '../public/Next.js_logo.svg';

import styles from '../styles/TechnologyList.module.css';

export const TechnologyList = () => {
  return (
    <ul className={styles['technology-list']}>
      <Technology image={HTMLlogo} height={54} />
      <Technology image={CSSlogo} height={54} />
      <Technology image={JSlogo} height={54} />
      <Technology image={SASSlogo} height={54} />
      <Technology image={Reactlogo} height={54} />
      <Technology image={NODEJSlogo} height={54} />
      <Technology image={MYSQLlogo} height={54} />
      <Technology image={NEXTJSlogo} height={24} />
    </ul>
  );
};
