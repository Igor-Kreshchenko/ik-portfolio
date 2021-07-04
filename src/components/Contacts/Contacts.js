import React from 'react';
import styles from './Contacts.module.scss';

const Contacts = () => {
  return (
    <div className={styles.contactsWrapper}>
      <p className={styles.contact}>
        tel: <span className={styles.contactInfo}>+380 68 633 92 57</span>
      </p>
      <p className={styles.contact}>
        email:{' '}
        <span className={styles.contactInfo}>Igor.kreshchenko@gmail.com</span>
      </p>
    </div>
  );
};

export default Contacts;
