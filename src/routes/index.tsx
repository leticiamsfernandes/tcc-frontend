import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GenerateToken from '../pages/GenerateToken';
import Home from '../pages/Home';
import RelatorioAluno from '../pages/RelatorioAluno';
import RelatorioQuestaoTurma from '../pages/RelatorioQuestaoTurma';
import RelatorioQuestao from '../pages/RelatorioQuestao';
import RelatorioTurma from '../pages/RelatorioTurma';

const Router: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route
        path="/gerartoken"
        component={(props: JSX.IntrinsicAttributes) => (
          <GenerateToken isGenerateScreen={true} {...props} />
        )}
      />
      <Route path="/obtertoken" component={GenerateToken} />
      <Route
        path="/relatorioaluno/:form_token/:prontuario_aluno"
        component={RelatorioAluno}
      />
      <Route path="/relatorio/:form_token" component={RelatorioTurma} />
      <Route path="/attempt/:attempt_id" component={RelatorioQuestao} />
      <Route
        path="/relatorioquestoes/:form_token"
        component={RelatorioQuestaoTurma}
      />
    </Switch>
  );
};

export default Router;
