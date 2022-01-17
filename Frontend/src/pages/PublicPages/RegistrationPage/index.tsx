import React from 'react';
import { useSelector } from 'react-redux';
import RegistrationBlock from '../../../components/AuthComponents/RegistrationBlock';
import { useActions } from '../../../hooks/useActions';
import PublicLayout from '../../../layouts/PublicLayout';
import { authLoadingSelector } from '../../../store/Auth/selectors';
import { notificationContentSelector, notificationShowSelector } from '../../../store/Notification/selectors';
import Notification from '../../../UI/Notification';

interface IRegistrationPageProps {}

const RegistrationPage: React.FC<IRegistrationPageProps> = () => {
  const { register, setNotification, showNotification, closeNotification } = useActions();
  const isAuthLoading = useSelector(authLoadingSelector);
  const notificationContent = useSelector(notificationContentSelector);
  const toShowNotification = useSelector(notificationShowSelector);

  const props = {
    register,
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
      <RegistrationBlock {...props} />
    </PublicLayout>
  );
};

export default RegistrationPage;
