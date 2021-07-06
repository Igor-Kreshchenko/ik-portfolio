import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <ul className={styles.contactList}>
        <li className={styles.contact}>
          <p className={styles.contactText}>
            tel: <span className={styles.contactInfo}>+380 68 633 92 57</span>
          </p>
        </li>
        <li className={styles.contact}>
          <p className={styles.contactText}>
            email:{' '}
            <span className={styles.contactInfo}>
              Igor.kreshchenko@gmail.com
            </span>
          </p>
        </li>
      </ul>

      <ul className={styles.socialList}>
        <li className={styles.socialItem}>
          <a
            href="https://www.facebook.com/igor.kreshchenko"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className={styles.socialIcon} width="50" height="50">
              <use href="./svg/sprite.svg#icon-facebook"></use>
            </svg>
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="https://t.me/IgorKreshchenko"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className={styles.socialIcon} width="50" height="50">
              <use href="./svg/sprite.svg#icon-telegram"></use>
            </svg>
          </a>
        </li>
        <li className={styles.socialItem}>
          <a
            href="https://github.com/Igor-Kreshchenko"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className={styles.socialIcon} width="50" height="50">
              <use href="./svg/sprite.svg#icon-github"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
