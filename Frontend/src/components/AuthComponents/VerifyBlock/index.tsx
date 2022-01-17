import React, { useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { PublicRoutes } from '../../../constants/routeNames';
import { NotificationType } from '../../../types/notificationType';
import Block from '../../../UI/Block';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';
import { NotificationTypes } from '../../../constants/notifications';
import { CLIENT_ERRORS } from '../../../constants/errors';
import LoadingSpinner from '../../../UI/LoadingSpinner';
import { IUser } from '../../../models/IUser';

interface IVerifyBlockProps {
  verify: (user: IUser) => (dispatch: Dispatch) => Promise<void>;
  logout: () => (dispatch: Dispatch) => Promise<void>;
  setNotification: (text: string, type: NotificationType) => {};
  showNotification: () => {};
  closeNotification: () => {};
  user: IUser;
  isVerifyLoading: boolean;
}

const VerifyBlock: React.FC<IVerifyBlockProps> = ({
  verify,
  logout,
  setNotification,
  showNotification,
  closeNotification,
  user,
  isVerifyLoading,
}) => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');

  const setLoginHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  }, []);

  const setNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  const setLastNameHandler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  }, []);

  const showWarning = useCallback((warningMessage): boolean => {
    setNotification(warningMessage, NotificationTypes.WARNING);
    showNotification();
    return true;
  }, []);

  const isFormHasErrors = useCallback((): boolean => {
    if (login.length < 5) {
      return showWarning(CLIENT_ERRORS.INCORRECT_LOGIN);
    }

    if (name.length < 2) {
      return showWarning(CLIENT_ERRORS.INCORRECT_NAME);
    }

    if (lastName.length < 3) {
      return showWarning(CLIENT_ERRORS.INCORRECT_LAST_NAME);
    }

    closeNotification();
    return false;
  }, [login, name, lastName]);

  const verifyUserHandler = useCallback(() => {
    if (!isFormHasErrors()) {
      const verifiedUser = { ...user, login, name, lastName };
      verify(verifiedUser);
    }
  }, [login, name, lastName]);

  const authTypeHandler = useCallback((): void => {
    logout();
    history.push(PublicRoutes.LOGIN);
  }, []);

  return (
    <Block
      title="Verify your account"
      description="Enter extra credentials to start using app."
      outerText="Return to main page?"
      innerText="Main"
      authTypeHandler={authTypeHandler}
    >
      <Input value={login} onChange={setLoginHandler} label="Login" placeholder="ivan123" />
      <Input value={name} onChange={setNameHandler} label="Name" placeholder="Ivan" />
      <Input value={lastName} onChange={setLastNameHandler} label="Last Name" placeholder="Ivanov" />
      {isVerifyLoading ? <LoadingSpinner /> : <Button value="Submit" onClick={verifyUserHandler} />}
    </Block>
  );
};

export default VerifyBlock;
