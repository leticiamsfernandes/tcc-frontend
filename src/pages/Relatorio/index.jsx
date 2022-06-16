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

  return (
    <PageWithHeader>
      <Title>Relatório: {id}</Title>
      <Table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Melhores pontuações</th>
            <th>Tentativas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>01/01/2020</td>
            <td className="split-cell">
              <div>
                <span className="key">skill 1:</span>
                <span className="value">0.98</span>
              </div>
              <div>
                <span className="key">skill 2:</span>
                <span className="value">0.98</span>
              </div>
              <div>
                <span className="key">skill 3:</span>
                <span className="value">0.98</span>
              </div>
            </td>
            <td className="align-icon">
              <span>2</span>
              <a href={`/relatorio/${id}/aluno/teste`}>
                <FiInfo />
              </a>
            </td>
          </tr>
        </tbody>
      </Table>
    </PageWithHeader>
  )
}

export default Relatorio
