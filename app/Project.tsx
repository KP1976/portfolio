import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

import styles from '../styles/Project.module.css';
import githubIcon from '../public/github.png';

interface Props {
  image: StaticImageData;
  projectTitle: string;
  projectDescription: string;
  projectLink: string;
}

export const Project = ({
  image,
  projectTitle,
  projectDescription,
  projectLink,
}: Props) => {
  return (
    <li className={styles.project}>
      <Image className={styles['project-image']} src={image} alt="" priority />

      <div className={styles['project-title-icon-container']}>
        <h3 className={styles['project-title']}>{projectTitle}</h3>
        <Link target="_blank" href={projectLink} rel="noopener noreferrer">
          <Image
            className={styles['project-icon']}
            src={githubIcon}
            alt="Github icon"
          />
        </Link>
      </div>

      <p className={styles['project-description']}>{projectDescription}</p>
    </li>
  );
};
