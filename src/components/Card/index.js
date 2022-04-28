import React from 'react';
import styles from './styles.module.css';
import Button from '../Button';

const Card = ({ data }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={data.avatar_url} alt={data.name} />
      <div>
        {data.name ? (
          <h1 className="title">{data.name}</h1>
        ) : (
          <h1 className="title">{data.login}</h1>
        )}
        {data.location && <p className="subtitle">{data.location}</p>}
        <Button style={{ marginTop: '10px' }}>
          Repositórios: {data.public_repos}
        </Button>
        <Button style={{ marginLeft: '10px' }}>
          Seguindo: {data.following}
        </Button>
        <Button style={{ marginLeft: '10px' }}>
          Seguidores: {data.followers}
        </Button>
      </div>
    </div>
  );
};

export default Card;
