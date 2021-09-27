import React from 'react';
import PersonalData from '../../../components/UserComponents/Profile/PersonalData';
import Photo from '../../../components/UserComponents/Profile/Photo';
import UserLayout from '../../../layouts/UserLayout';
import * as UI from './styles';

interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = () => {
  const props = {

  };

  return(
    <UserLayout>
      <UI.LeftPart>
        <Photo></Photo>
      </UI.LeftPart>
      <UI.RightPart>
        <PersonalData></PersonalData>
      </UI.RightPart>
    </UserLayout>
  );
};

export default ProfilePage;