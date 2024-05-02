import Image, { StaticImageData } from 'next/image';

import styles from '@styles/Project.module.css';

export const ProjectCardImage = ({ image }: { image: StaticImageData }) => {
  return (
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
  );
};
