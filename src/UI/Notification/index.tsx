import React from 'react';
import { getIconByType } from '../../helpers/notificationIconsUtils';
import { INotification } from '../../models/INotification';
import * as UI from './styles';

interface INotificationProps extends INotification {
  onClick: () => {};
}

const Notification: React.FC<INotificationProps> = ({
  text,
  type,
  onClick
}) => {
  return(
    <UI.Notification onClick={onClick} type={type}>
      <UI.IconHolder>
        {getIconByType(type)}
      </UI.IconHolder>
      {text}
    </UI.Notification>
  )
};

export default Notification;