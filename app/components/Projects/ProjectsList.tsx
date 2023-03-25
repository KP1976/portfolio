import React from 'react';
import bakeryProject from '../../../public/cukiernia.jpg';
import tilesProject from '../../../public/kafelki.jpg';
import todoProject from '../../../public/todo.jpg';
import { Project } from './Project';

import styles from '../../../styles/ProjectsList.module.css';

export const ProjectsList = () => {
  return (
    <ul className={styles['projects-list']}>
      <Project
        image={todoProject}
        projectTitle="Aplikacja TO-DO"
        projectDescription="Full-stackowa aplikacja do zarządzania zadaniami."
        projectLink="https://github.com/KP1976/TaskManager_frontend"
      />
      <Project
        image={tilesProject}
        projectTitle="Gra w kafelki"
        projectDescription="Gra, w której odkrywamy kolejno dwa pasujące kolorami do siebie kafelki."
        projectLink="https://github.com/KP1976/kafelki"
      />
      <Project
        image={bakeryProject}
        projectTitle="Cukiernia"
        projectDescription="Sklep internetowy, w którym możemy zakupić różnego rodzaju ciastka."
        projectLink="https://github.com/KP1976/BAKERY_SHOP"
      />
    </ul>
  );
};
