import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../../styles/Project.module.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  image: StaticImageData;
  projectTitle: string;
  projectDescription: string;
  projectLink?: string;
  projectGithubLink: string;
}

export const Project = ({
  image,
  projectTitle,
  projectDescription,
  projectGithubLink,
  projectLink,
}: Props) => {
  return (
    <li className={styles.project}>
      <Link
        target="_blank"
        href={projectLink ? projectLink : ''}
        rel="noopener noreferrer"
        style={
          projectLink ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }
        }
      >
        <Image
          className={styles['project-image']}
          src={image}
          alt=""
          priority
        />
      </Link>

      <div className={styles['project-title-icon-container']}>
        <h3 className={styles['project-title']}>{projectTitle}</h3>
        <Link
          target="_blank"
          href={projectGithubLink}
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className={styles['project-icon']}
            icon={faGithub}
            color="#61DAFB"
            title="github"
          />
        </Link>
      </div>

      <p className={styles['project-description']}>{projectDescription}</p>
    </li>
  );
};
