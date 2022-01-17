import React, { useCallback } from 'react';
import Button from '../../../../UI/Button';
import profilePhoto from '../../../../assets/imgs/profilePhoto.jpg';
import * as UI from './styles';
import { IUser } from '../../../../models/IUser';

interface IPhotoProps {
  user: IUser;
}

const EditButtonStyles = {
  marginTop: '25px',
  height: '35px',
  fontSize: '16px',
  padding: 0,
};

const Photo: React.FC<IPhotoProps> = ({ user }) => {
  const editDataHandler = useCallback(() => {}, []);

  return (
    <UI.PhotoHolder>
      <UI.Avatar>
        <UI.AvatarText>
          {user.name[0]}
          {user.lastName[0]}
        </UI.AvatarText>
      </UI.Avatar>
      <Button value="Edit profile" onClick={editDataHandler} styles={EditButtonStyles} />
    </UI.PhotoHolder>
  );
};

export default Photo;
