import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Button from '../Button';

const Card = ({ data, profile }) => {
  const [showRepos, setShowRepos] = useState(false);
  const [repository, setRepository] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${profile}/repos`)
      .then((res) => res.json())
      .then((result) => {
        setShowRepos(true);
        setRepository(result);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setShowRepos(false);
  }, [data]);

  return (
    <>
      <div className={styles.card}>
        <img className={styles.image} src={data.avatar_url} alt={data.name} />
        <div>
          {data.name ? (
            <h1 className="title">{data.name}</h1>
          ) : (
            <h1 className="title">{data.login}</h1>
          )}
          {data.location && <p>{data.location}</p>}
          <div className={styles.company}>
            {data.company && <p>{data.company}</p>}
          </div>
          <Button onClick={handleClick}>
            Repositórios: {data.public_repos}
          </Button>
          <Button>Seguindo: {data.following}</Button>
          <Button>Seguidores: {data.followers}</Button>
        </div>
      </div>
      {showRepos && (
        <div className={styles.repos}>
          {repository.map((repo) => (
            <div className={styles.repo} key={repo.id}>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <p>{repo.name}</p>
                <div className={styles.repo_language}>
                  <span>{repo.language}</span>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
