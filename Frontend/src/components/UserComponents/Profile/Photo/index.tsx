import React, { useCallback } from 'react';
import Button from '../../../../UI/Button';
import profilePhoto from '../../../../assets/imgs/profilePhoto.jpg';
import { UserActions } from '../../../../constants/profileActions';
import { getUserIconByAction } from '../../../../helpers/profileActionsUtils';
import * as UI from './styles';

interface IPhotoProps {}

const EditButtonStyles = {
  marginTop: '25px',
  height: '35px',
  fontSize: '16px',
  padding: 0,
};

const Photo: React.FC<IPhotoProps> = () => {
  const editDataHandler = useCallback(() => {

  }, []);

  return (
    <UI.PhotoHolder>
      <UI.Photo src={profilePhoto}/>
      <Button value="Edit profile" onClick={editDataHandler} styles={EditButtonStyles}/>
      {
        Object.values(UserActions).map((action, index) => 
          <UI.ActionPoint key={index}>
            {getUserIconByAction(action)}
            <UI.Text>{action}</UI.Text>
          </UI.ActionPoint>
        )
      }
    </UI.PhotoHolder>
  );
};

export default Photo;