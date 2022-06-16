import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GenerateToken from '../pages/GenerateToken'
import Home from '../pages/Home'
import RelatorioAluno from '../pages/RelatorioAluno'
import RelatorioQuestao from '../pages/RelatorioQuestao'
import RelatorioTurma from '../pages/RelatorioTurma'

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/gerartoken"
        component={() => <GenerateToken isGenerateScreen={true} />}
      />
      <Route path="/obtertoken" component={GenerateToken} />
      <Route
        path="/relatorioaluno/:form_token/:prontuario_aluno"
        component={RelatorioAluno}
      />
      <Route path="/relatorio/:form_token" component={RelatorioTurma} />
      <Route path="/attempt/:attempt_id" component={RelatorioQuestao} />
    </Switch>
  )
}

export default Router
