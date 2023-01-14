import React from 'react';
import styles from '../styles/ProjectsList.module.css';
import { Project } from './Project';

export const ProjectsList = () => {
  return (
    <ul className={styles['projects-list']}>
      <Project />
      <Project />
      <Project />
    </ul>
  );
};
