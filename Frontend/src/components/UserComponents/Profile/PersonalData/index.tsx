import React from 'react'
import * as UI from './styles';

interface IPersonalDataProps {

}

const PersonalData: React.FC<IPersonalDataProps> = () => {
  return (
    <UI.PersonalDataHolder>
      <UI.Header>
        <UI.HeaderTopPart>
          <UI.UserName>Ramil Sagidullin</UI.UserName>
          <UI.UserConnectionStatus>online</UI.UserConnectionStatus>
        </UI.HeaderTopPart>
        <UI.HeaderBottomPart>
          <UI.UserProfileStatus>Highest in the room 🔥</UI.UserProfileStatus>
        </UI.HeaderBottomPart>
      </UI.Header>
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
      <UI.ProfileIndicators>
        <UI.Indicator>
          <UI.IndicatorData>135</UI.IndicatorData>
          <UI.IndicatorText>friends</UI.IndicatorText>
        </UI.Indicator>
        <UI.Indicator>
          <UI.IndicatorData>177</UI.IndicatorData>
          <UI.IndicatorText>subscribers</UI.IndicatorText>
        </UI.Indicator>
        <UI.Indicator>
          <UI.IndicatorData>1</UI.IndicatorData>
          <UI.IndicatorText>photo</UI.IndicatorText>
        </UI.Indicator>
      </UI.ProfileIndicators>
    </UI.PersonalDataHolder>
  );
};

export default PersonalData;
