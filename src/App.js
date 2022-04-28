import React, { useState } from 'react';

import Header from './components/Header';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';

const App = () => {
  const [github, setGithub] = useState('');
  const [showGithub, setShowGithub] = useState(false);
  const [data, setData] = useState({});
  const [showCard, setShowCard] = useState(false);

  function handleChange(event) {
    setGithub(event.target.value);
  }

  async function handleClick(event) {
    if (github === '') {
      return;
    }

    event.preventDefault();
    setShowGithub(!showGithub);

    const response = await fetch(`https://api.github.com/users/${github}`);
    if (response.ok) {
      const data = await response.json();
      setData(data);
      setShowCard(true);
    } else {
      setShowCard(false);
    }
  }

  return (
    <div className="animeLeft container">
      <Header title="Busque o perfil" />
      <Input
        label="Nome"
        type="text"
        name="github"
        value={github}
        onChange={handleChange}
      />
      <Button onClick={handleClick}>Buscar</Button>
      {showCard && <Card data={data} />}
    </div>
  );
};

export default App;
