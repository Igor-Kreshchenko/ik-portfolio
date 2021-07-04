import React from 'react';
import styles from './EducationList.module.scss';

const EducationList = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.listItem}>
        <a
          href="https://onmu.odessa.ua/en/home-en-gb/"
          target="_blank"
          rel="noreferrer noopener"
        >
          ONMU
        </a>
        <span>2004-2010</span>
      </li>
      <li className={styles.listItem}>
        <a href="https://goit.ua/" target="_blank" rel="noreferrer noopener">
          GoIt (Full Stack)
        </a>
        <span>2020-2021</span>
      </li>
    </ul>
  );
};

export default EducationList;
