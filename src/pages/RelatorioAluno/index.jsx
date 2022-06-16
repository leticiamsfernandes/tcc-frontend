import { FiCheck, FiCheckCircle, FiCircle, FiInfo } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import PageWithHeader from '../../components/PageWithHeader'
import { MT08, MT32, Table, Title } from '../../components/Styled'

function RelatorioAluno(props) {
  const { form_token, prontuario_aluno } = useParams()
  /* TODO ver tentativas */
  /*  TODO por questão */

  const data = {
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
  }

  const AttemptTable = ({ title, attempts }) => {
    return (
      <>
        <MT08 />
        <h3>{title}</h3>
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
                <td>01/01/2020</td>
                <td className="split-cell">
                  {item.skills.map(skill => (
                    <div>
                      <span className="key">{skill.key}:</span>
                      <span className="value">{skill.value}</span>
                    </div>
                  ))}
                </td>
                <td>{item.done ? <FiCheck /> : null}</td>
                <td>
                  <a href={`/attempt/${item.id}`}>
                    <FiInfo />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </>
    )
  }

  return (
    <PageWithHeader>
      <Title>
        Relatório: {form_token} | Aluno: {prontuario_aluno}, {data.nome_aluno}
      </Title>
      <AttemptTable attempts={data.attempts} title="Melhor tentativa" />
      <MT32 />
      <AttemptTable attempts={[data.best_attempt]} title="Todas tentativas" />
    </PageWithHeader>
  )
}

export default RelatorioAluno
