import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from '../styles/Project.module.css';
import githubIcon from '../public/github.png';

interface Props {
  image: StaticImageData;
  projectTitle: string;
  projectDescription: string;
}

export const Project = ({ image, projectTitle, projectDescription }: Props) => {
  return (
    <li className={styles.project}>
      <Image
        className={styles['project-image']}
        src={image}
        alt="ToDo application"
        priority
      />

      <div className={styles['project-title-icon-container']}>
        <h3 className={styles['project-title']}>{projectTitle}</h3>
        <Link
          target="_blank"
          href="https://github.com/KP1976/TaskManager_frontend"
          rel="noopener noreferrer"
        >
          <Image
            className={styles['project-icon']}
            src={githubIcon}
            alt="Github"
          />
        </Link>
      </div>

      <p className={styles['project-description']}>{projectDescription}</p>
    </li>
  );
};
