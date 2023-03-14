import { Ubuntu } from '@next/font/google';
import React from 'react';
import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Header } from './Header';
import { Navigation } from './Navigation';
import { Projects } from './Projects';

import styles from '../styles/Home.module.css';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <div className={styles['flare1']}></div>
      <div className={styles['flare2']}></div>
      <div className={`${ubuntu.className} ${styles.container}`}>
        <Navigation />
        <Header />
        <Projects />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
