import bakeryProject from '../../public/cukiernia.jpg';
import tilesProject from '../../public/kafelki.jpg';
import todoProject from '../../public/todo.jpg';

export const projects = [
  {
    id: 1,
    image: todoProject,
    projectTitle: 'Aplikacja TO-DO',
    projectDescription: 'Full-stackowa aplikacja do zarządzania zadaniami.',
    projectGithubLink: 'https://github.com/KP1976/TaskManager_frontend',
  },
  {
    id: 2,
    image: tilesProject,
    projectTitle: 'Gra w kafelki',
    projectDescription:
      'Gra, w której odkrywamy kolejno dwa pasujące kolorami do siebie kafelki.',
    projectGithubLink: 'https://github.com/KP1976/kafelki',
    projectLink: 'https://kp1976.github.io/kafelki',
  },
  {
    id: 3,
    image: bakeryProject,
    projectTitle: 'Cukiernia',
    projectDescription:
      'Sklep internetowy, w którym możemy zakupić różnego rodzaju ciastka.',
    projectGithubLink: 'https://github.com/KP1976/BAKERY_SHOP',
    projectLink: 'https://kp1976.github.io/BAKERY_SHOP',
  },
];
