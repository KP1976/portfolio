import React from 'react';
import { TechnologyList } from './TechnologyList';
import { AboutMeDescription } from './AboutMeDescription';
import { SectionTitle } from '@components/SectionTitle';

export const AboutMe = () => {
  return (
    <section id="about">
      <SectionTitle title="O mnie" />
      <AboutMeDescription />
      <TechnologyList />
    </section>
  );
};
