import React from 'react';
import { Navigation } from './Navigation';
import { Header } from './Header';
import { Projects } from './Projects';
import { Ubuntu } from '@next/font/google';
import { AboutMe } from './AboutMe';
import { Contact } from './Contact';
import { Footer } from './Footer';

import styles from '../styles/Home.module.css';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

const Home = () => {
  return (
    <div className={`${ubuntu.className} ${styles.container}`}>
      <Navigation />
      <Header />
      <Projects />
      <AboutMe />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
