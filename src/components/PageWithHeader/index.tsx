import React from 'react'
import { FiMenu } from 'react-icons/fi'
import theme from '../../styles/theme'
import { MT04, MT08, WhiteLine } from '../Styled'

import { PageContainer, HeaderContainer, ContentContainer } from './styles'

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>
        <a href="#">Gerar código da tentativa</a>
        <a href="#">Relatório</a>
      </HeaderContainer>
      <MT04 />
      <WhiteLine />
    </>
  )
}

const PageWithHeader: React.FC = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <ContentContainer>{children}</ContentContainer>
    </PageContainer>
  )
}

export default PageWithHeader
