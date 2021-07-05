import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PortfolioItem from './PortfolioItem';
import projects from '../../data/portfolio.json';
import styles from './Portfolio.module.scss';

const Portfolio = () => {
  return (
    <ul className={styles.list}>
      {projects.map(
        ({ title, description, siteLink, preview, gitLink, techList }) => {
          const id = uuidv4();

          return (
            <PortfolioItem
              key={id}
              title={title}
              description={description}
              siteLink={siteLink}
              preview={preview}
              gitLink={gitLink}
              techList={techList}
            />
          );
        },
      )}
    </ul>
  );
};

export default Portfolio;
