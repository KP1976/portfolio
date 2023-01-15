import React from 'react';
import styles from '../styles/ProjectsList.module.css';
import { Project } from './Project';
import todoProject from '../public/todo.jpg';
import tilesProject from '../public/kafelki.jpg';
import bakeryProject from '../public/cukiernia.jpg';

export const ProjectsList = () => {
  return (
    <ul className={styles['projects-list']}>
      <Project
        image={todoProject}
        projectTitle={'Aplikacja TO-DO'}
        projectDescription={'Full-stackowa aplikacja do zarządzania zadaniami.'}
      />
      <Project
        image={tilesProject}
        projectTitle={'Gra w kafelki'}
        projectDescription={
          'Gra, w której odkrywamy kolejno dwa pasujące kolorami do siebie kafelki.'
        }
      />
      <Project
        image={bakeryProject}
        projectTitle={'Cukiernia'}
        projectDescription={
          'Sklep internetowy, w którym możemy zakupić różnego rodzaju ciastka.'
        }
      />
    </ul>
  );
};
