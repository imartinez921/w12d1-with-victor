import React from 'react';
import { App } from './app';
import { Provider } from 'react-redux';
import PokemonIndexContainer from './../components/pokemon/pokemon_index_container';
import { HashRouter } from 'react-router-dom';
import PokemonDetailContainer from './../components/pokemon/pokemon_detail_container';


const Root = ({ store }) => (

    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  
);

export default Root;