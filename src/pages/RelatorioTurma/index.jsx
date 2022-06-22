import { useCallback, useEffect, useState } from 'react';
import { FiArrowRightCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageWithHeader from '../../components/PageWithHeader';
import { Table } from '../../components/Styled';
import SwitchButton from '../../components/SwitchButton';
import api from '../../services/api';
import theme from '../../styles/theme';
import { timestampToDate } from '../../utils/formatters';

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: ${theme.space[3]};
`;

function RelatorioTurma() {
  const { form_token } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/relatorio/turma', {
        params: { form_id: form_token },
      });
      setData(response.data);
    };

    getData();
  }, []);

  return (
    <PageWithHeader>
      <Title>Relatório: {form_token}</Title>
      <SwitchButton form_token={form_token} activeIndex={0} />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Prontuário</th>
            <th>Data 1ª tentativa</th>
            <th>Data última tentativa</th>
            <th>Melhores pontuações</th>
            <th>Tentativas</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.aluno.nome}</td>
              <td>{item.aluno.prontuario}</td>
              <td>{timestampToDate(item.first_attempt)}</td>
              <td>{timestampToDate(item.last_attempt)}</td>
              <td className="split-cell">
                {item.skills.map(skill => (
                  <div key={`${item.id}-${skill.name}`}>
                    <span className="key">{skill.name}:</span>
                    <span className="value">{skill.value}</span>
                  </div>
                ))}
              </td>
              <td>
                <div className="align-icon">
                  <span>{item.tentativas}</span>
                  <a
                    href={`/relatorioaluno/${form_token}/${item.aluno.prontuario}`}
                  >
                    <FiArrowRightCircle />
                  </a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWithHeader>
  );
}

export default RelatorioTurma;
