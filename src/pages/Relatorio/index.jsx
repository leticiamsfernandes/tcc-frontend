import { FiInfo } from 'react-icons/fi'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import PageWithHeader from '../../components/PageWithHeader'
import { Table } from '../../components/Styled'
import theme from '../../styles/theme'

const Title = styled.h2`
  width: 100%;
  text-align: center;
  margin-bottom: ${theme.space[3]};
`

function Relatorio(props) {
  const { id } = useParams()
  /* TODO ver tentativas */
  /*  TODO por questão */

  const data = [
    {
      id: 1,
      data: '2020-01-01',
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
  ]

  return (
    <PageWithHeader>
      <Title>Relatório: {id}</Title>
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
                <a href={`/relatorio/${id}/aluno/teste`}>
                  <FiInfo />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWithHeader>
  )
}

export default Relatorio
