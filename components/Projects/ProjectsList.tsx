import React from 'react';
// import { Project } from './Project';
import Link from 'next/link';

import { projects } from '@database/projects';

import styles from '@styles/ProjectsList.module.css';
import { CompoundProjectCard } from './compoundProjectCard/ProjectCard';

export const ProjectsList = () => {
  return (
    <ul className={styles['projects-list']}>
      {projects.map(
        ({
          id,
          image,
          projectTitle,
          projectGithubLink,
          projectDescription,
        }) => {
          return (
            <CompoundProjectCard key={id}>
              <Link target="_blank" href={''} rel="noopener noreferrer">
                <CompoundProjectCard.ProjectCardImage
                  image={image}
                  alt={projectTitle}
                />
              </Link>
              <CompoundProjectCard.ProjectCardTitle
                projectTitle={projectTitle}
                projectGithubLink={projectGithubLink}
              />
              <CompoundProjectCard.ProjectCardDescription
                projectDescription={projectDescription}
              />
            </CompoundProjectCard>
          );
        }
      )}
    </ul>
  );
};
