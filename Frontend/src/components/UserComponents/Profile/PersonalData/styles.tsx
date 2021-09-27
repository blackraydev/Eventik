import styled from "styled-components";
import colors from "../../../../constants/colors";

export const PersonalDataHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.secondary};
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
  margin-bottom: 15px;
  border-bottom: 1px solid ${colors.background};
`;

export const HeaderTopPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-left: 5px;
`;

export const HeaderBottomPart = styled.div`
  transition: .25s;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  padding: 5px;
  border-radius: 10px;

  &:hover {
    background-color: ${colors.lightSecondary};
  }
`;

export const UserName = styled.p`
  color: ${colors.white};
  font-size: 20px;
`;

export const UserConnectionStatus = styled.span`
  font-size: 14px;
  color: ${colors.lightGray};
`;

export const UserProfileStatus = styled.p`
  color: ${colors.brightWhite};
  font-size: 16px;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
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
  color: ${colors.lightGray};
  margin-left: 5px;
  margin-right: 15px;
`;

export const InformationData = styled.span`
  color: ${colors.lightGray};
`;


export const ProfileIndicators = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${colors.background};
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
      color: ${colors.pinkHover};
    }
  }
`;

export const IndicatorData = styled.p`
  transition: .25s;
  color: ${colors.brightWhite};
  font-size: 24px;
`;

export const IndicatorText = styled.p`
  transition: .25s;
  color: ${colors.lightGray};
  font-size: 16px;
`;