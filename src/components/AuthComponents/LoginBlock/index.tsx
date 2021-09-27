import React, { useCallback, useMemo, useState } from 'react';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router';
import { PublicRoutes } from '../../../constants/routeNames';
import { ChangeEvent } from '../../../types/eventTypes';
import { INotification } from '../../../models/INotification';
import { NotificationType } from '../../../types/notificationType';
import Block from '../../../UI/Block';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { CLIENT_ERRORS } from '../../../constants/errors';
import { NotificationTypes } from '../../../constants/notifications';
import LoadingSpinner from '../../../UI/LoadingSpinner';

interface ILoginBlockProps {
  login: (email: string, password: string) => (dispatch: Dispatch) => Promise<void>;
  setNotification: (text: string, type: NotificationType) => {};
  showNotification: () => {};
  closeNotification: () => {};
  isAuth: boolean;
  isAuthLoading: boolean;
  notificationContent: INotification;
  toShowNotification: boolean;
};

const LoginBlock: React.FC<ILoginBlockProps> = ({
  login,
  setNotification,
  showNotification,
  closeNotification,
  isAuth,
  isAuthLoading,
  notificationContent,
  toShowNotification
}) => {
  const history = useHistory();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const loginHandler = useCallback(() => {
    if (!isFormHasErrors()) {
      login(email, password);
    }
  }, [login, email, password]);

  const isFormHasErrors = useCallback((): boolean => {
    if (password.length < 6) {
      setNotification(CLIENT_ERRORS.PASSWORD_MIN_LENGTH, NotificationTypes.WARNING);
      showNotification();
      return true;
    }

    // Проверка Email как и пароля

    closeNotification();
    return false;
  }, [password, CLIENT_ERRORS, NotificationTypes]);

  const authTypeHandler = useCallback(() => {
    history.push(PublicRoutes.REGISTRATION);
  }, [history, PublicRoutes]);

  return(
    <Block 
      title="Sign in" 
      description="Login into system to manage your account."
      outerText="Don't have an account?"
      innerText="Sign up"
      authTypeHandler={authTypeHandler}
    >
      <Input
        value={email}
        onChange={(e: ChangeEvent) => setEmail(e.currentTarget.value)}
        label="Your Login"
        placeholder="Email or nickname"
      />
      <Input
        value={password}
        onChange={(e: ChangeEvent) => setPassword(e.currentTarget.value)}
        label="Your Password"
        placeholder="Password"
        type="password"
      />
      {
        isAuthLoading
          ? <LoadingSpinner />
          : <Button value="Sign in" onClick={loginHandler}/>
      }
      
    </Block>
  );
};

export default LoginBlock;