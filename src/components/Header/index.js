import React from 'react';
import styles from './styles.module.css';

const Header = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default Header;
