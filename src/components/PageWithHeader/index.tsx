import React from 'react'
import { FiMenu } from 'react-icons/fi'
import theme from '../../styles/theme'
import { MT04, MT08, WhiteLine } from '../Styled'

import {
  PageContainer,
  HeaderContainer,
  EnterpriseIcon,
  ContentContainer,
} from './styles'

const Header: React.FC = () => {
  return (
    <>
      <HeaderContainer>Header content</HeaderContainer>
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
