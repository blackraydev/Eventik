import React from 'react';
import profilePhoto from '../../../../assets/imgs/profilePhoto.jpg';
import { IUser } from '../../../../models/IUser';
import * as UI from './styles';

interface IUserCellProps {
  user: IUser;
}

const UserCell: React.FC<IUserCellProps> = ({ user }) => {
  return (
    <UI.UserCell>
      <UI.Avatar>
        <UI.AvatarText>
          {user.name[0]}
          {user.lastName[0]}
        </UI.AvatarText>
      </UI.Avatar>
      <UI.UserData>
        <UI.UserName>
          {user.name} {user.lastName}
        </UI.UserName>
        <UI.UserStatus>@{user.login}</UI.UserStatus>
      </UI.UserData>
    </UI.UserCell>
  );
};

export default UserCell;
