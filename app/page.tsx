import React from 'react';
import { Navigation } from './Navigation';

import styles from '../styles/Home.module.css';
import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

const Home = () => {
  return (
    <div className={`${ubuntu.className} ${styles.container}`}>
      <Navigation />
    </div>
  );
};

export default Home;
