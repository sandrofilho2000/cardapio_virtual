import React, {useState, useEffect} from 'react'
import './Cardapio.css';
import './SearchBar.css';
import './Bairros.css';

import  Cardapio  from './components/cardapioPizzas'

import  Bairros  from './components/Bairros'


function App() {


  return (
    <div className="App">
      <Cardapio/>
      <Bairros/>
    </div>
  );
}

export default App;
