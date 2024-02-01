import React from 'react';
import styles from '@styles/MenuItem.module.css';

type MenuItemProps = {
  value: string;
  href: string;
  download?: string;
  target?: string;
  title?: string;
};

export const MenuItem = ({
  value,
  href,
  download,
  target,
  title,
}: MenuItemProps) => {
  return (
    <li className={styles['menu-item']}>
      <a
        className={styles['menu-item-link']}
        href={href}
        download={download}
        target={target}
        title={title}
      >
        {value}
      </a>
    </li>
  );
};
