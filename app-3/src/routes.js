import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Pokemon from './Pokemon';
import PokemonList from './PokemonList';

export default (
  <Switch>
    <Route exact path="/" component={PokemonList} />
    <Route path="/pokemon/:name" component={Pokemon} />
  </Switch>
)