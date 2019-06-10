import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return (
    <div>
      <h1 id="main">Adopt Me!</h1>
      <Pet name="Chilli" animal="Dog" breed="Labrador" />
      <Pet name="Pepper" animal="Bird" breed="Parrot" />
      <Pet name="Ginger" animal="Cat" breed="Silk" />
    </div>
  );
};

render(<App />, document.getElementById('root'));
