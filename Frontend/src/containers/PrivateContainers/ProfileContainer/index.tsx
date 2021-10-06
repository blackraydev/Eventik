import React from 'react';
import PersonalData from '../../../components/UserComponents/Profile/PersonalData';
import Photo from '../../../components/UserComponents/Profile/Photo';
import PrivateLayout from '../../../layouts/PrivateLayout';
import * as UI from './styles';

interface IProfileContainerProps {}

const ProfileContainer: React.FC<IProfileContainerProps> = () => {
  const props = {

  };

  return(
    <PrivateLayout>
      <UI.LeftPart>
        <Photo></Photo>
      </UI.LeftPart>
      <UI.RightPart>
        <PersonalData></PersonalData>
      </UI.RightPart>
    </PrivateLayout>
  );
};

export default ProfileContainer;