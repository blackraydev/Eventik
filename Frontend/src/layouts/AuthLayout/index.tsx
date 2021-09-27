import React from 'react';
import * as UI from './styles';

interface IAuthLayoutProps {
  children: any;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ children }) => {
  return(
    <UI.Layout>
      {children}
    </UI.Layout>
  );
};

export default AuthLayout;