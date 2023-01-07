import React from 'react'
import { Navigation } from './Navigation'

import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  )
}

export default Home