import styled from 'styled-components';

export const ButtonsStyled = styled.button`
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  background: #6d6dde;
  color: #2020a5;
  font-weight: 600;
  border: 1px dashed blue;

  :not(:last-child) {
    margin-right: 15px;
  }

  svg {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
`;
