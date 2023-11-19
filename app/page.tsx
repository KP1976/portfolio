import { Ubuntu } from 'next/font/google';
import { Metadata } from 'next';
import React from 'react';

import { AboutMe } from '@components/AboutMe/AboutMe';
import { Contact } from '@components/Contact/Contact';
import { Header } from '@components/Header';
import { Navigation } from '@components/Navigation';
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
