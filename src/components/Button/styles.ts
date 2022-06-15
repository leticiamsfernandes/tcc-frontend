import { lighten } from 'polished'
import styled from 'styled-components'

export const Container = styled.button`
  background: #4a8fe7;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 12px;
  color: #fafafa;
  width: 100%;
  font-weight: 500;
  margin-top: 5%;
  transition: background-color 0.2s;

  &:hover {
    background: ${lighten(0.2, '#4A8FE7')};
  }
`
