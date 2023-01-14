import React from 'react';
import Image from 'next/image';
import styles from '../styles/Project.module.css';
import todoProject from '../public/todo.jpg';
import githubIcon from '../public/github.png';

export const Project = () => {
  return (
    <li className={styles.project}>
      <Image
        className={styles['project-image']}
        src={todoProject}
        alt="ToDo application"
      />

      <div className={styles['project-title-icon-container']}>
        <h3 className={styles['project-title']}>Aplikacja TO-DO</h3>
        <a
          target="_blank"
          href="https://github.com/KP1976/TaskManager_frontend"
          rel="noopener noreferrer"
        >
          <Image
            className={styles['project-icon']}
            src={githubIcon}
            alt="Github"
          />
        </a>
      </div>

      <p className={styles['project-description']}>
        Full-stackowa aplikacja do zarządzania zadaniami.
      </p>
    </li>
  );
};
