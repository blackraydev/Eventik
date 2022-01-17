import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background: ${COLORS.BACKGROUND};
`;

export const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 325px;
  padding-right: 25px;
`;

export const MiddlePart = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 715px;
  padding: 0 25px;
`;

export const RightPart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 325px;
  padding-left: 25px;
`;

export const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const VideoWrapper = styled.div`
  background: white;
`;

export const Video = styled.video`
  border-radius: 50px;
`;
