import React from 'react'
import { FiMenu } from 'react-icons/fi'
import styled from 'styled-components'
import theme from '../../styles/theme'
import { MT04, MT08, WhiteLine } from '../Styled'

import { PageContainer, HeaderContainer, ContentContainer } from './styles'

const Button = styled.button`
  border: none;
  background: none;
`

interface IProps {
  showBackButton?: boolean
}

const Header: React.FC<IProps> = ({ showBackButton }) => {
  return (
    <>
      <HeaderContainer>
        <a href="/gerartoken">Gerar código da tentativa</a>
        <a href="/obtertoken">Relatório</a>
        {showBackButton && (
          <Button onClick={() => window.history.back()}>Voltar</Button>
        )}
      </HeaderContainer>
      <MT04 />
      <WhiteLine />
      <MT08 />
    </>
  )
}

const PageWithHeader: React.FC<IProps> = ({ children, showBackButton }) => {
  return (
    <PageContainer>
      <Header showBackButton={showBackButton} />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  )
}

export default PageWithHeader
