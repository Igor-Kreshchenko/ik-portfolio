import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({
  title,
  description,
  siteLink,
  preview,
  gitLink,
  techList,
}) => {
  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={siteLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={preview} alt="" />
      </a>
      <h3 className={styles.title}>&#123; {title} &#125;</h3>
      <p className={styles.description}>{description}</p>
      <a
        className={styles.gitLink}
        href={gitLink}
        target="_blank"
        rel="noreferrer noopener"
      >
        Watch on GitHub
      </a>
      <ul className={styles.techList}>
        {techList.map(item => {
          const id = uuidv4();

          return (
            <li className={styles.techListItem} key={id}>
              #{item}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default PortfolioItem;
