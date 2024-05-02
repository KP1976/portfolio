import Link from 'next/link';

import styles from '@styles/Project.module.css';

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProjectCardTitle = ({
  projectTitle,
  projectGithubLink,
}: {
  projectTitle: string;
  projectGithubLink: string;
}) => {
  return (
    <div className={styles['project-title-icon-container']}>
      <h3 className={styles['project-title']}>{projectTitle}</h3>
      <Link target="_blank" href={projectGithubLink} rel="noopener noreferrer">
        <FontAwesomeIcon
          className={styles['project-icon']}
          icon={faGithub}
          color="#7CACD7"
          title="github"
        />
      </Link>
    </div>
  );
};
