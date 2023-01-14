import React from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Projects } from './Projects';

import styles from '../styles/Home.module.css';
import { Ubuntu } from '@next/font/google';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

const Home = () => {
  return (
    <div className={`${ubuntu.className} ${styles.container}`}>
      <Navigation />
      <Header />
      <Projects />
    </div>
  );
};

export default Home;
