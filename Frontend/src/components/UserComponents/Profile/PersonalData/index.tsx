import React from 'react';
import { IUser } from '../../../../models/IUser';
import * as UI from './styles';

interface IPersonalDataProps {
  user: IUser;
}

const PersonalData: React.FC<IPersonalDataProps> = ({ user }) => {
  return (
    <UI.PersonalDataHolder>
      <UI.Header>
        <UI.HeaderTopPart>
          <UI.UserName>
            {user.name} {user.lastName}
          </UI.UserName>
          <UI.UserConnectionStatus>online</UI.UserConnectionStatus>
        </UI.HeaderTopPart>
        <UI.HeaderBottomPart>
          {user.status ? (
            <UI.UserProfileStatus>{user.status}</UI.UserProfileStatus>
          ) : (
            <UI.UserProfileStatusEmpty>Enter your status</UI.UserProfileStatusEmpty>
          )}
        </UI.HeaderBottomPart>
      </UI.Header>
      {(user.birthDate || user.country) && (
        <UI.MainContent>
          <UI.InformationPoint>
            <UI.InformationText>Birth date: </UI.InformationText>
            <UI.InformationData>19 february, 2001</UI.InformationData>
          </UI.InformationPoint>
          <UI.InformationPoint>
            <UI.InformationText>City: </UI.InformationText>
            <UI.InformationData>New York</UI.InformationData>
          </UI.InformationPoint>
        </UI.MainContent>
      )}
      <UI.ProfileIndicators>
        <UI.Indicator>
          <UI.IndicatorData>0</UI.IndicatorData>
          <UI.IndicatorText>followers</UI.IndicatorText>
        </UI.Indicator>
        <UI.Indicator>
          <UI.IndicatorData>0</UI.IndicatorData>
          <UI.IndicatorText>following</UI.IndicatorText>
        </UI.Indicator>
      </UI.ProfileIndicators>
    </UI.PersonalDataHolder>
  );
};

export default PersonalData;
