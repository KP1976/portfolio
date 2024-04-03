import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '@styles/Project.module.css';

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
        aria-label="Project Link"
        target="_blank"
        href={projectLink ? projectLink : ''}
        rel="noopener noreferrer"
        style={
          projectLink ? { pointerEvents: 'auto' } : { pointerEvents: 'none' }
        }
      >
        <div className={styles['project-image-container']}>
          <Image
            className={styles['project-image']}
            src={image}
            alt=""
            priority
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
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
            color="#7CACD7"
            title="github"
          />
        </Link>
      </div>

      <p className={styles['project-description']}>{projectDescription}</p>
    </li>
  );
};
