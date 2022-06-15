import styled from 'styled-components'
import theme from '../../styles/theme'

export const WhiteLine = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.light};
  border-radius: ${theme.space[1]};
  margin: 0 auto;
`

export const MT04 = styled.div`
  margin-top: ${theme.space[2]};
`

export const MT08 = styled.div`
  margin-top: ${theme.space[3]};
`

export const HeaderContainer = styled.div`
  margin: 2%;
  margin-bottom: 16px;
`
