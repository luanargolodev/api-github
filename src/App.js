import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  function handleClick(event) {
    event.preventDefault();

    fetch('https://api-charadas.herokuapp.com/puzzle?lang=ptbr', {
      mode: 'no-cors',
    })
      .then((response) => response.json())
      .then((data) => console.log(data.question))
      .catch((err) => console.log(err));
  }

  return (
    <div className="animeLeft container">
      <Header title="Busque um perfil no GitHub" />
      <Button onClick={handleClick}>Gerar Charada</Button>
    </div>
  );
};

export default App;
