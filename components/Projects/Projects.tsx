import React from 'react';
import styles from '@styles/Projects.module.css';
import { ProjectsList } from './ProjectsList';
import { SectionTitle } from '@components/SectionTitle';

export const Projects = () => {
  return (
    <section className={styles.projects} id="projects">
      <SectionTitle title="Projekty" />
      <ProjectsList />
    </section>
  );
};
