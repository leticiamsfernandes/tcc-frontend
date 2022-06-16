import PageWithHeader from '../../components/PageWithHeader'
import { Table, Title } from '../../components/Styled'

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
}

function RelatorioQuestao() {
  return (
    <PageWithHeader>
      <Title>
        Relatório: {data.form_token} <br /> {data.aluno_nome}, {data.aluno_id}
        <br /> Tentativa {data.id}
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
          {data.reports?.map(item => (
            <tr key={item.id}>
              <td>{item.questao}</td>
              <td>{item.falhas}</td>
              <td>{item.sucessos}</td>
              <td>{item.dicas}</td>
              <td>{item.tentativas}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </PageWithHeader>
  )
}

export default RelatorioQuestao
