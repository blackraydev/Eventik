import styled from 'styled-components';
import colors from '../../../../constants/colors';

export const PhotoHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
  padding: 25px;
  width: 250px;
  margin-right: 25px;
  border-radius: 25px;
`;

export const Photo = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 25px;
  cursor: pointer;
`;

export const ActionPoint = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  transition: .25s;
  margin-top: 25px;
  margin-left: 40px;
  color: ${colors.gray};

  svg {
    transition: .25s;
    width: 20px;
    height: 20px;
    fill: ${colors.gray};
  }

  &:hover {
    color: ${colors.pinkHover};

    svg {
      fill: ${colors.pinkHover};
    }
  }
`;

export const Text = styled.p`
  margin-left: 15px;
`;