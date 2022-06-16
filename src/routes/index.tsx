import React, { useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import GenerateToken from '../pages/GenerateToken'
import Home from '../pages/Home'
import Relatorio from '../pages/Relatorio'

const LoggedInRoutes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/gerartoken" component={GenerateToken} />
      <Route path="/relatorio/:id" component={Relatorio} />
    </Switch>
  )
}

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/gerartoken"
        component={() => <GenerateToken isGenerateScreen={true} />}
      />
      <Route path="/obtertoken" component={GenerateToken} />
      <Route path="/relatorio/:id" component={Relatorio} />
    </Switch>
  )
}

export default Router
