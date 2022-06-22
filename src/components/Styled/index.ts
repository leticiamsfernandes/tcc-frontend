import styled from 'styled-components';
import theme from '../../styles/theme';

export const WhiteLine = styled.hr`
  width: 100%;
  border: 1px solid ${theme.color.light};
  border-radius: ${theme.space[1]};
  margin: 0 auto;
`;

export const MT04 = styled.div`
  margin-top: ${theme.space[2]};
`;

export const MT08 = styled.div`
  margin-top: ${theme.space[3]};
`;

export const MT32 = styled.div`
  margin-top: ${theme.space[6]};
`;

export const HeaderContainer = styled.div`
  margin: 2%;
  margin-bottom: 16px;
`;
export const Table = styled.table`
  width: 100%;
  margin: 0 ${theme.space[2]};
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid ${theme.color.light};

  tr,
  td,
  th {
    border: 1px solid ${theme.color.light};
  }

  td,
  th {
    padding: ${theme.space[2]};
    text-align: center;
  }

  th {
    background-color: ${theme.color.light};
    border: 1px solid ${theme.color.lightText};
    font-weight: ${theme.font.weight.bolder};
  }

  /* Split cell class */
  .split-cell > div {
    /* display: inline; */
    text-align: left;
    padding-left: ${theme.space[2]};
  }

  /*
  .split-cell > div + div {
    border-left: 2px solid ${theme.color.light};
    margin-left: ${theme.space[3]};
    padding-left: ${theme.space[3]};
  }
  */

  span + span {
    margin-left: ${theme.space[1]};
  }

  /* key span */
  .key {
    font-weight: ${theme.font.weight.bolder};
    color: ${theme.color.lightText};
  }

  .align-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      margin-right: ${theme.space[3]};
      color: ${theme.color.dark};
    }
  }

  a {
    text-decoration: none;
    margin: 0;
    padding: 0;
    width: ${theme.font.size[1]};
    height: ${theme.font.size[1]};
  }

  svg {
    color: ${theme.color.lightText};
  }
`;
export const Title = styled.h2`
  width: 100%;
  text-align: center;
  padding: ${theme.space[3]};

  display: flex;
  align-items: flex-end;
  justify-content: space-around;
`;
