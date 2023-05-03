import React from 'react';
import { Project } from './Project';
import { projects } from '../../database/projects';

import styles from '../../../styles/ProjectsList.module.css';

export const ProjectsList = () => {
  return (
    <ul className={styles['projects-list']}>
      {projects.map(
        ({
          id,
          image,
          projectTitle,
          projectDescription,
          projectGithubLink,
          projectLink,
        }) => {
          return (
            <Project
              key={id}
              image={image}
              projectTitle={projectTitle}
              projectDescription={projectDescription}
              projectGithubLink={projectGithubLink}
              projectLink={projectLink}
            />
          );
        }
      )}
    </ul>
  );
};
