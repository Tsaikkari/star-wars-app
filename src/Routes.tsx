import React from 'react'
import { Switch, Route } from 'react-router-dom'

import StarWarsApp from './components/StarWarsApp'
import SingleCharacter from './components/SingleCharacter'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={StarWarsApp} />
    <Route exact path="/character/:id" component={SingleCharacter} />
  </Switch>
)

export default Routes