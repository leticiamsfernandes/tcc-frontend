import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

// import { Container } from './styles';

interface IProps {
  form_token: string;
  activeIndex: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

interface ILinkProps {
  isActive?: boolean;
}

const Link = styled.a<ILinkProps>`
  text-decoration: none;
  color: ${props => (props.isActive ? theme.color.lightText : 'blue')};
  pointer-events: ${props => (props.isActive ? 'none' : 'auto')};
`;

const Spacing = styled.div`
  margin-left: 8px;
  margin-right: 8px;
`;

const SwitchButton: React.FC<IProps> = ({ form_token, activeIndex }) => {
  return (
    <Container>
      <Link href={`/relatorio/${form_token}`} isActive={activeIndex === 0}>
        Alunos
      </Link>
      <Spacing>|</Spacing>
      <Link
        href={`/relatorioquestoes/${form_token}`}
        isActive={activeIndex === 1}
      >
        Questões
      </Link>
    </Container>
  );
};

export default SwitchButton;
