import React from 'react';
import styles from './styles.module.css';

const Input = ({ label, type, name, value, onChange, handleSubmit }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={styles.input}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
