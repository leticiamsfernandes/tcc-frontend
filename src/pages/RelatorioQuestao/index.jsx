import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWithHeader from '../../components/PageWithHeader';
import { Table, Title } from '../../components/Styled';
import api from '../../services/api';
/* 
const data = {
  aluno_id: 1,
  aluno_nome: 'Aluno 1',
  form_token: 'token',
  reports: [
    {
      id: 1,
      questao: 'Questão 1',
      falhas: 2,
      sucessos: 3,
      dicas: 4,
      tentativas: 5,
    },
  ],
}; */

function RelatorioQuestao() {
  const { attempt_id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/relatorio/attempt', {
        params: { attempt_id },
      });
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <PageWithHeader showBackButton>
      <Title>
        Relatório: {data.form_id} <br /> {data.aluno?.nome} (
        {data.aluno?.prontuario})
        <br /> Tentativa {attempt_id}
      </Title>
      <Table>
        <thead>
          <tr>
            <th>Questão</th>
            <th>Falhas</th>
            <th>Sucessos</th>
            <th>Dicas</th>
            <th>Tentativas totais</th>
          </tr>
        </thead>
        <tbody>
          {data.report?.map(item => (
            <tr key={item.id}>
              <td>{item.question_name}</td>
              <td>{item.failures}</td>
              <td>{item.success}</td>
              <td>{item.hints_requests}</td>
              <td>{item.total_attempts}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWithHeader>
  );
}

export default RelatorioQuestao;
