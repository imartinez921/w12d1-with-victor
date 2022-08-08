import React from "react";
import PokemonIndexContainer from "./pokemon/pokemon_index_container";
import PokemonDetailContainer from "./pokemon/pokemon_detail_container";

import { Route, Switch, Redirect } from 'react-router-dom';


export const App = () => (
    <div>
        <Switch>
            <Route path="/pokemon/:id" component={PokemonDetailContainer} />
            <Route path="/" component={PokemonIndexContainer} />
        </Switch>
    </div>
)