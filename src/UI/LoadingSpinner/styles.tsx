import styled from 'styled-components';
import colors from '../../constants/colors';

export const SpinnerHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 35px;
`;

export const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  &::after {
    content: "";
    width: 55px;
    height: 55px;
    border: 3px solid ${colors.background};
    border-top-color: ${colors.pink};
    border-radius: 50%;
    animation: loading 1s ease infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;