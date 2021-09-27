import React from 'react';
import { useSelector } from 'react-redux';
import LoginBlock from '../../../components/AuthComponents/LoginBlock';
import { useActions } from '../../../hooks/useActions';
import AuthLayout from '../../../layouts/AuthLayout';
import { authCheckSelector, authLoadingSelector } from '../../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../../store/Notification/selectors';
import Notification from '../../../UI/Notification';

interface ILoginPageProps {}

const LoginPage: React.FC<ILoginPageProps> = () => {
  const { login, setNotification, showNotification, closeNotification } = useActions();
  const isAuth = useSelector(authCheckSelector);
  const isAuthLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const props = {
    login,
    setNotification,
    showNotification,
    closeNotification,
    isAuth,
    isAuthLoading,
    notificationContent,
    toShowNotification
  };

  const notificationProps = {
    ...notificationContent,
    onClick: closeNotification
  };

  return(
    <AuthLayout>
      { toShowNotification && <Notification {...notificationProps}/> }
      <LoginBlock {...props} />
    </AuthLayout>
  );
};

export default LoginPage;