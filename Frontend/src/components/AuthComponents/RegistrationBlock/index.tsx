import React, { useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import validator from 'validator';
import { useHistory } from 'react-router';
import { PublicRoutes } from '../../../constants/routeNames';
import { useActions } from '../../../hooks/useActions';
import { ChangeEvent } from '../../../types/eventTypes';
import { NotificationType } from '../../../types/notificationType';
import { INotification } from '../../../models/INotification';
import { CLIENT_ERRORS } from '../../../constants/errors';
import { NotificationTypes } from '../../../constants/notifications';
import Block from '../../../UI/Block';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import LoadingSpinner from '../../../UI/LoadingSpinner';

interface IRegistrationBlockProps {
  login: (email: string, password: string) => (dispatch: Dispatch) => Promise<void>;
  setNotification: (text: string, type: NotificationType) => {};
  showNotification: () => {};
  closeNotification: () => {};
  isAuth: boolean;
  isAuthLoading: boolean;
  notificationContent: INotification;
  toShowNotification: boolean;
};

const RegistrationBlock: React.FC<IRegistrationBlockProps> = ({
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
  const { register } = useActions();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");

  const isFormHasErrors = useCallback((): boolean => {
    if (!validator.isEmail(email)) {
      setNotification(CLIENT_ERRORS.INCORRECT_EMAIL, NotificationTypes.WARNING);
      showNotification();
      return true;
    }

    if (password.length < 6) {
      setNotification(CLIENT_ERRORS.PASSWORD_MIN_LENGTH, NotificationTypes.WARNING);
      showNotification();
      return true;
    }

    if (password !== repeatedPassword) {
      setNotification(CLIENT_ERRORS.PASSWORDS_NOT_MATCH, NotificationTypes.WARNING);
      showNotification();
      return true;
    }

    closeNotification();
    return false;
  }, [
    email,
    password,
    repeatedPassword,
    setNotification,
    showNotification,
    closeNotification,
  ]);

  const registrationHandler = useCallback((): void => {
    if (!isFormHasErrors()) {
      register(email, password);
    }
  }, [isFormHasErrors, register, email, password, repeatedPassword]);
  
  const authTypeHandler = useCallback((): void => {
    history.push(PublicRoutes.LOGIN)
  }, [history]);

  return(
    <Block
      title="Create your account"
      description="Enter your credentials to continue."
      outerText="Already have an account?"
      innerText="Sign in"
      authTypeHandler={authTypeHandler}
    >
      <Input
        value={email}
        onChange={(e: ChangeEvent) => setEmail(e.currentTarget.value)}
        label="Login"
        placeholder="Email or nickname"
      />
      <Input
        value={password}
        onChange={(e: ChangeEvent) => setPassword(e.currentTarget.value)}
        label="Password"
        placeholder="Password"
        type="password"
      />
      <Input
        value={repeatedPassword}
        onChange={(e: ChangeEvent) => setRepeatedPassword(e.currentTarget.value)}
        label="Repeat Password"
        placeholder="Password"
        type="password"
      />
      {
        isAuthLoading
          ? <LoadingSpinner />
          : <Button value="Create new account" onClick={registrationHandler}/>
      }
    </Block>
  );
};

export default RegistrationBlock;