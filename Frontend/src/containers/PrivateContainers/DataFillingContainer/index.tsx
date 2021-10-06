import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import PublicLayout from '../../../layouts/PublicLayout';
import { notificationContentSelector, notificationShowSelector } from '../../../store/Notification/selectors';
import Notification from '../../../UI/Notification';

interface IDataFillingContainerProps {}

const DataFillingContainer: React.FC<IDataFillingContainerProps> = () => {
  const { setNotification, showNotification, closeNotification } = useActions();
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const props = {
    
    setNotification,
    showNotification,
    closeNotification
  };

  const notificationProps = {
    ...notificationContent,
    onClick: closeNotification
  };

  return(
    <PublicLayout>
      { toShowNotification && <Notification {...notificationProps}/> }
      {/* DataFillingBlock */ }
    </PublicLayout>
  );
};

export default DataFillingContainer;