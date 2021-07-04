import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import img from '../../../images/web-studio.png';
import styles from './PortfolioItem.module.scss';

const PortfolioItem = ({ title, description, link, techList }) => {
  return (
    <li className={styles.item}>
      <a
        className={styles.link}
        href={link}
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={img} alt="" />
      </a>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.techList}>
        {techList.map(item => {
          const id = uuidv4();

          return (
            <li className={styles.techListItem} key={id}>
              {item}
            </li>
          );
        })}
      </ul>
    </li>
  );
};

export default PortfolioItem;
