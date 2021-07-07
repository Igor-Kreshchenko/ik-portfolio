import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import styles from './SkillList.module.scss';

const SkillList = ({ title, items }) => {
  return (
    <div className={styles.skillBox}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <ul className={styles.list}>
        {items.map(item => {
          const id = uuidv4();

          return (
            <li className={styles.listItem} key={id}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SkillList;

SkillList.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
