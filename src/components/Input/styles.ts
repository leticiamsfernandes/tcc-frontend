import styled, { css } from 'styled-components'

import Tooltip from '../Tooltip'

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #fafafa;
  border-radius: 10px;
  padding: 12px;
  width: 100%;
  border: 4px solid #fafafa;
  color: #9099a2;
  display: flex;
  align-items: center;
  & + div {
    margin-top: 5%;
  }
  ${(props: ContainerProps): any =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}
  ${(props: ContainerProps): any =>
    props.isFocused &&
    css`
      color: blue;
      border-color: blue;
    `}
  ${(props: ContainerProps): any =>
    props.isFilled &&
    css`
      color: #000;
    `}
  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #000;
    &::placeholder {
      color: #9099a2;
    }
  }
  svg {
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }
  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`
