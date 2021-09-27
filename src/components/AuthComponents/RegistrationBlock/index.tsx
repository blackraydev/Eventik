import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { PublicRoutes } from '../../../constants/routeNames';
import { useActions } from '../../../hooks/useActions';
import { ChangeEvent } from '../../../types/eventTypes';
import Block from '../../../UI/Block';
import Button from '../../../UI/Button';
import Input from '../../../UI/Input';

interface IRegistrationBlockProps {};

const RegistrationBlock: React.FC<IRegistrationBlockProps> = () => {
  const history = useHistory();
  const { register } = useActions();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [repeatedPassword, setRepeatedPassword] = useState<string>("");

  const registrationHandler = (): void => {
    register(email, password);
  };

  const authTypeHandler = (): void => history.push(PublicRoutes.LOGIN);

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
      <Button value="Create new account" onClick={registrationHandler}/>
    </Block>
  );
};

export default RegistrationBlock;