import React from 'react';
import { useSelector } from 'react-redux';
import LoginBlock from '../../../components/AuthComponents/LoginBlock';
import { useActions } from '../../../hooks/useActions';
import PublicLayout from '../../../layouts/PublicLayout';
import { authLoadingSelector } from '../../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../../store/Notification/selectors';
import Notification from '../../../UI/Notification';

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  const { login, setNotification, showNotification, closeNotification } = useActions();
  const isAuthLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const props = {
    login,
    setNotification,
    showNotification,
    closeNotification,
    isAuthLoading,
  };

  const notificationProps = {
    ...notificationContent,
    onClick: closeNotification,
  };

  return (
    <PublicLayout>
      {toShowNotification && <Notification {...notificationProps} />}
      <LoginBlock {...props} />
    </PublicLayout>
  );
};

export default LoginPage;
