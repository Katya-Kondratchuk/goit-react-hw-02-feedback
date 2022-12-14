import styled from 'styled-components';

export const StatisticsStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: #320f8c;
  font-style: italic;
  font-weight: bold;
  text-align: start;
  margin-left: 160px;

  span:not(:last-child) {
    margin-bottom: 15px;
  }

  .good {
    color: green;
  }

  .bad {
    color: red;
  }

  .neutral {
    color: yellow;
  }
`;
