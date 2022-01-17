import React from 'react';
import { useSelector } from 'react-redux';
import PersonalData from '../../../components/UserComponents/Profile/PersonalData';
import Photo from '../../../components/UserComponents/Profile/Photo';
import PrivateLayout from '../../../layouts/PrivateLayout';
import { authUserSelector } from '../../../store/Auth/selectors';
import * as UI from './styles';

interface IProfilePageProps {}

const ProfilePage: React.FC<IProfilePageProps> = () => {
  const user = useSelector(authUserSelector);

  return (
    <PrivateLayout>
      <UI.LeftPart>
        <Photo user={user} />
      </UI.LeftPart>
      <UI.RightPart>
        <PersonalData user={user} />
      </UI.RightPart>
    </PrivateLayout>
  );
};

export default ProfilePage;
