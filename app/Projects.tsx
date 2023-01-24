import React from 'react';
import styles from '../styles/Projects.module.css';
import { ProjectsList } from './ProjectsList';

export const Projects = () => {
  return (
    <div className={styles.projects}>
      <div className={styles['projects-flare']}></div>
      <h2 className="section-title">Projekty</h2>
      <ProjectsList />
    </div>
  );
};
