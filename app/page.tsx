import { Ubuntu } from '@next/font/google';
import Head from 'next/head';
import React from 'react';

import { AboutMe } from '@components/AboutMe/AboutMe';
import { Contact } from '@components/Contact/Contact';
import { Header } from '@components/Header';
import { Navigation } from '@components/Navigation';
import { Projects } from '@components/Projects/Projects';
import { Footer } from '../components/Footer';

import styles from '@styles/Home.module.css';

const ubuntu = Ubuntu({ weight: ['300', '700'], subsets: ['latin'] });

const Home = () => {
  return (
    <>
      <Head>
        <title>The page title</title>
      </Head>
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
