import styles from '@styles/Project.module.css';

export const ProjectCardDescription = ({
  projectDescription,
}: {
  projectDescription: string;
}) => {
  return <p className={styles['project-description']}>{projectDescription}</p>;
};
