import React, { useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';

const App = () => {
  const [piada, setPiada] = useState('1');
  const [showPiada, setShowPiada] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setShowPiada(!showPiada);

    fetch('https://api-charadas.herokuapp.com/puzzle?lang=ptbr', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  }

  return (
    <div className="animeLeft container">
      <Header title="Gerador de Charadas" />
      <Button onClick={handleClick}>Gerar Charada</Button>
    </div>
  );
};

export default App;
