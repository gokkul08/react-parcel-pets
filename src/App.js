import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';

const App = () => {
  return React.createElement('div', { id: 'main' }, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Chilli',
      animal: 'Dog',
      breed: 'Labrador'
    }),
    React.createElement(Pet, {
      name: 'Pepper',
      animal: 'Bird',
      breed: 'Parrot'
    }),
    React.createElement(Pet, { name: 'Ginger', animal: 'Cat', breed: 'Silk' })
  ]);
};

render(React.createElement(App), document.getElementById('root'));
