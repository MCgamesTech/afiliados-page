import React from 'react';
import logo from './assets/logo.svg';
import { Navbar } from './components';
import { BemVindo } from './components';
import { Porque } from './components';
import { DestinoUnico } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <BemVindo />
      <Porque />
      <DestinoUnico />
    </div>
  );
}

export default App;
