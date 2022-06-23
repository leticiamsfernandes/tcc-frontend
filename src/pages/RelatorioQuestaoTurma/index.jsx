import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageWithHeader from '../../components/PageWithHeader';
import { Table, Title } from '../../components/Styled';
import SwitchButton from '../../components/SwitchButton';
import api from '../../services/api';

function RelatorioQuestaoTurma() {
  const { form_token } = useParams();

  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/relatorio/turma/questoes', {
        params: { form_token },
      });
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <PageWithHeader showBackButton>
      <Title>
        Relatório: {form_token} <br />
      </Title>
      <SwitchButton activeIndex={1} form_token={form_token} />
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

export default RelatorioQuestaoTurma;
