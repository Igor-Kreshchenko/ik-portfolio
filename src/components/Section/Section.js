import React from 'react';
import styles from './Section.module.scss';

const Section = ({ title, id, children }) => {
  return (
    <section id={id} className={styles.section}>
      {title && <h2 className={styles.sectionTitle}>&lt; {title} /&gt;</h2>}
      {children}
    </section>
  );
};

export default Section;
