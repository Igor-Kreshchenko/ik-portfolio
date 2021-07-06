import React from 'react';
import styles from './MenuButton.module.scss';

const MenuButton = ({ isNav, onClick }) => {
  return (
    <button className={styles.menuButton} onClick={onClick}>
      {isNav ? (
        <svg width="30" height="30">
          <use href="./svg/menu-button.svg#icon-cross"></use>
        </svg>
      ) : (
        <svg width="30" height="30">
          <use href="./svg/menu-button.svg#icon-paragraph-justify"></use>
        </svg>
      )}
    </button>
  );
};

export default MenuButton;
