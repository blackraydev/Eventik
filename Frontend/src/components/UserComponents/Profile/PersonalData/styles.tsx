import styled from 'styled-components';
import { COLORS } from '../../../../constants/colors';

export const PersonalDataHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.SECONDARY};
  border-radius: 25px;
  padding: 25px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 15px;
`;

export const HeaderTopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 5px;
`;

export const HeaderBottomPart = styled.div`
  transition: 0.25s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: ${COLORS.LIGHT_SECONDARY};
  }
`;

export const UserName = styled.p`
  color: ${COLORS.WHITE};
  font-size: 20px;
`;

export const UserConnectionStatus = styled.span`
  font-size: 14px;
  color: ${COLORS.LIGHT_GRAY};
`;

export const UserProfileStatus = styled.p`
  color: ${COLORS.BRIGHT_WHITE};
  font-size: 16px;
`;

export const UserProfileStatusEmpty = styled.p`
  color: ${COLORS.GRAY};
  font-size: 16px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  padding-top: 15px;
  border-top: 1px solid ${COLORS.BACKGROUND};
`;

export const InformationPoint = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
  font-size: 16px;
`;

export const InformationText = styled.p`
  color: ${COLORS.LIGHT_GRAY};
  margin-left: 5px;
  margin-right: 15px;
`;

export const InformationData = styled.span`
  color: ${COLORS.LIGHT_GRAY};
`;

export const ProfileIndicators = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${COLORS.BACKGROUND};
  padding: 15px;
  padding-bottom: 0;
  margin-top: 5px;
`;

export const Indicator = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  &:hover {
    p {
      color: ${COLORS.PINK_HOVER};
    }
  }
`;

export const IndicatorData = styled.p`
  transition: 0.25s;
  color: ${COLORS.BRIGHT_WHITE};
  font-size: 24px;
`;

export const IndicatorText = styled.p`
  transition: 0.25s;
  color: ${COLORS.LIGHT_GRAY};
  font-size: 16px;
`;
