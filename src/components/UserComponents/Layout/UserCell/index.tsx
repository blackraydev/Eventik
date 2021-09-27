import React from 'react';
import profilePhoto from '../../../../assets/imgs/profilePhoto.jpg';
import * as UI from './styles';

interface IUserCellProps {}

const UserCell: React.FC<IUserCellProps> = () => {
  return(
    <UI.UserCell>
      <UI.ProfilePicture src={profilePhoto}/>
      <UI.UserData>
        <UI.UserName>Ramil Sagidullin</UI.UserName>
        <UI.UserStatus>@blackray</UI.UserStatus>
      </UI.UserData>
    </UI.UserCell>
  );
};

export default UserCell;