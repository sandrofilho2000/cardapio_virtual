import React, {useState, useEffect} from 'react'
import './App.css';
import Axios from 'axios'
import Cardapio from './components/cardapioPizzas'
import logo from './assets/imagens/logo_bgremover.png';
import aiqfome from './assets/imagens/aiqfome.svg';
import instagram from './assets/imagens/instagram.svg';
function App() {


  return (
    <div className="App">
      <div className='wrapper'>


        <div className='cardapio_wrapper'>
          <div className='cardapio_container'>
            <div className='logo_container'>
              <img src={logo} className="img_logo" />
            </div>

            <Cardapio/>



          </div>
          <div className='infos'>
            <div className='left'>
              <p className="address">
                R. Sábino José Ferreira, 719 - Carmo, Barbacena - MG, 36200-656
              </p>
              <p className="tel">
                3333-3333
              </p>
            </div>
            <div className='right'>
              <p className="instagram">
                <a target="_blank" href="https://www.instagram.com/pizzariareal.bq/">
                  pizzariareal.bq
                </a>
                <img src={instagram} />
              </p>
              <p className="aiqfome">
                <a target="_blank" href="https://aiqfome.com/MG/barbacena/pizzaria-real">
                  Pizzaria Real
                </a>
                <img src={aiqfome} />
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
