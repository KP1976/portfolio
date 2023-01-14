import React from 'react';
import styles from '../styles/Projects.module.css';
import { ProjectsList } from './ProjectsList';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <h2 className={styles['projects-title']}>Projekty</h2>
      <ProjectsList />
    </div>
  );
};
