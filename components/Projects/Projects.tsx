import React from 'react';
import styles from '@styles/Projects.module.css';
import { ProjectsList } from './ProjectsList';

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <div className={styles['projects-flare']}></div>
      <h2 className="section-title">Projekty</h2>
      <ProjectsList />
    </section>
  );
};