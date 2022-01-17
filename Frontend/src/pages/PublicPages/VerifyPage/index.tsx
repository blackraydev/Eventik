import React from 'react';
import { useSelector } from 'react-redux';
import VerifyBlock from '../../../components/AuthComponents/VerifyBlock';
import { useActions } from '../../../hooks/useActions';
import PublicLayout from '../../../layouts/PublicLayout';
import { authLoadingSelector, authUserSelector } from '../../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../../store/Notification/selectors';
import Notification from '../../../UI/Notification';

const VerifyPage: React.FC = () => {
  const { setNotification, showNotification, closeNotification, logout, verify } = useActions();
  const user = useSelector(authUserSelector);
  const isVerifyLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const props = {
    verify,
    logout,
    isVerifyLoading,
    user,
    setNotification,
    showNotification,
    closeNotification,
  };

  const notificationProps = {
    ...notificationContent,
    onClick: closeNotification,
  };

  return (
    <PublicLayout>
      {toShowNotification && <Notification {...notificationProps} />}
      <VerifyBlock {...props} />
    </PublicLayout>
  );
};

export default VerifyPage;
