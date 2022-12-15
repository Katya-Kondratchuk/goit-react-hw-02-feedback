import styled from 'styled-components';

export const ButtonsStyled = styled.button`
  text-transform: uppercase;
  padding: 5px 10px;
  cursor: pointer;
  color: #2020a5;
  font-weight: 600;
  border: 1px dashed blue;

  background-color: ${({ name }) => {
    switch (name) {
      case 'bad':
        return 'red';

      case 'good':
        return 'green';

      case 'neutral':
        return 'yellow';

      default:
        return 'grey';
    }
  }};

  :not(:last-child) {
    margin-right: 15px;
  }

  svg {
    margin-right: 10px;
    width: 15px;
    height: 15px;
  }
`;
