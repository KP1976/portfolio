import React from 'react';

import { ProjectCardImage } from './ProjectCardImage';
import { ProjectCardTitle } from './ProjectCardTitle';
import { ProjectCardDescription } from './ProjectCardDescription';

import styles from '@styles/Project.module.css';

interface Props {
  children: React.ReactNode;
}

export const CompoundProjectCard = ({ children }: Props) => {
  return <li className={styles.project}>{children}</li>;
};

CompoundProjectCard.ProjectCardImage = ProjectCardImage;
CompoundProjectCard.ProjectCardTitle = ProjectCardTitle;
CompoundProjectCard.ProjectCardDescription = ProjectCardDescription;
