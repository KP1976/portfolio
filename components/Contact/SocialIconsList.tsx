import React from 'react';

import facebookIcon from '@public/facebook.png';
import githubIcon from '@public/github.png';
import linkedinIcon from '@public/linkedin.png';

import styles from '@styles/SocialIconsList.module.css';
import { SocialIcon } from './SocialIcon';

export const SocialIconsList = () => {
  return (
    <ul className={styles['social-icons']}>
      <SocialIcon
        href="https://www.facebook.com/KP1976PL"
        icon={facebookIcon}
      />
      <SocialIcon href="https://github.com/KP1976" icon={githubIcon} />
      <SocialIcon
        href="https://www.linkedin.com/in/krzysztof-paw%C5%82owski-74aa01154/"
        icon={linkedinIcon}
      />
    </ul>
  );
};
