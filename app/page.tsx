import React from 'react';
import { Ubuntu } from 'next/font/google';
import { Metadata } from 'next';

import { AboutMe } from '@components/AboutMe/AboutMe';
import { Contact } from '@components/Contact/Contact';
import { Header } from '@components/Header/Header';
import { Navigation } from '@components/Navigation/Navigation';
import { Projects } from '@components/Projects/Projects';
import { Footer } from '../components/Footer';

import styles from '@styles/Home.module.css';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio 2023',
  description: 'Portfolio Krzysztofa Pawłowskiego',
  icons: {
    icon: '/kp1976_logo.ico',
  },
};

const Home = () => {
  return (
    <>
      <div className={`${ubuntu.className} ${styles.container}`}>
        <Navigation />
        <div className={`${styles.sections}`}>
          <Header />
          <Projects />
          <AboutMe />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
