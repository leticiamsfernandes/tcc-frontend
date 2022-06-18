import { FiArrowRightCircle } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageWithHeader from '../../components/PageWithHeader';
import { Table } from '../../components/Styled';
import SwitchButton from '../../components/SwitchButton';
import theme from '../../styles/theme';

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: ${theme.space[3]};
`;

function RelatorioTurma(props) {
  const { form_token } = useParams();

  const data = [
    {
      id: 1,
      date: '2020-01-01',
      aluno: {
        nome: 'Aluno 1',
        prontuario: 'id_aluno',
      },
      skills: [
        { key: 'skill 1', value: '0.98%' },
        { key: 'skill 2', value: '0.98%' },
        { key: 'skill 3', value: '0.98%' },
      ],
      tentativas: 2,
    },
  ];

  return (
    <PageWithHeader>
      <Title>Relatório: {form_token}</Title>
      <SwitchButton form_token={form_token} activeIndex={0} />
      <Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Prontuário</th>
            <th>Data</th>
            <th>Melhores pontuações</th>
            <th>Tentativas</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.aluno.nome}</td>
              <td>{item.aluno.prontuario}</td>
              <td>01/01/2020</td>
              <td className="split-cell">
                {item.skills.map(skill => (
                  <div>
                    <span className="key">{skill.key}:</span>
                    <span className="value">{skill.value}</span>
                  </div>
                ))}
              </td>
              <td className="align-icon">
                <span>2</span>
                <a
                  href={`/relatorioaluno/${form_token}/${item.aluno.prontuario}`}
                >
                  <FiArrowRightCircle />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWithHeader>
  );
}

export default RelatorioTurma;
