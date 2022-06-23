import { useEffect, useState } from 'react';
import { FiArrowRightCircle, FiCheck } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import PageWithHeader from '../../components/PageWithHeader';
import { MT04, MT08, MT32, Table, Title } from '../../components/Styled';
import api from '../../services/api';
import { formatPercentage, timestampToDate } from '../../utils/formatters';

function RelatorioAluno(props) {
  const { form_token, prontuario_aluno } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await api.get('/relatorio/aluno', {
        params: { form_id: form_token, student_id: prontuario_aluno },
      });
      console.log(response);
      setData(response.data);
    };

    getData();
  }, []);

  const data2 = {
    nome_aluno: 'Aluno 1',
    best_attempt: {
      id: '2',
      date: '2020-01-01',
      skills: [
        { key: 'skill 1', value: '0.98%' },
        { key: 'skill 2', value: '0.98%' },
        { key: 'skill 3', value: '0.98%' },
      ],
      done: true,
    },
    attempts: [
      {
        id: '2',
        date: '2020-01-01',
        skills: [
          { key: 'skill 1', value: '0.98%' },
          { key: 'skill 2', value: '0.98%' },
          { key: 'skill 3', value: '0.98%' },
        ],
        done: false,
      },
    ],
  };

  const AttemptTable = ({ title, attempts = [] }) => {
    return (
      <>
        <MT08 />
        <h3>{title}</h3>
        <MT04 />
        <Table>
          <thead>
            <tr>
              <th>Data</th>
              <th>Pontuação</th>
              <th>Finalizada</th>
              <th>Detalhes</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map(item => (
              <tr key={item.id}>
                <td>{timestampToDate(item.date)}</td>
                <td className="split-cell">
                  {item?.skills?.map(skill => (
                    <div>
                      <span className="key">{skill.name}:</span>
                      <span className="value">
                        {formatPercentage(skill.value)}
                      </span>
                    </div>
                  ))}
                </td>
                <td>{item.done ? <FiCheck color="green" /> : null}</td>
                <td>
                  <a href={`/attempt/${item.id}`}>
                    <FiArrowRightCircle />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    );
  };

  return (
    <PageWithHeader showBackButton>
      <Title>
        Relatório: {data.form_token} | Aluno: {data.aluno?.nome} (
        {prontuario_aluno})
      </Title>
      <AttemptTable
        attempts={data.best_attempt ? [data.best_attempt] : []}
        title="Melhor tentativa"
      />
      <MT32 />
      <AttemptTable attempts={data.attempts} title="Todas tentativas" />
    </PageWithHeader>
  );
}

export default RelatorioAluno;
