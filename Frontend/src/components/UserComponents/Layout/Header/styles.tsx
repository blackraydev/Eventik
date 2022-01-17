import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 25px;
  margin-bottom: 25px;
  background: ${COLORS.SECONDARY};
  color: ${COLORS.WHITE};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

export const LeftPart = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 325px;
`;

export const MiddlePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 715px;
`;

export const RightPart = styled.div`
  display: flex;
  justify-content: spave-evenly;
  align-items: flex-end;
  width: 325px;
`;

export const LogoHolder = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;

  svg {
    width: 25px;
    height: 25px;
  }
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AppTitle = styled.div`
  font-size: 24px;
  margin-left: 10px;
`;
