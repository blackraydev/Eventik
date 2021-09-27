import React from 'react';
import Header from '../../components/UserComponents/Layout/Header';
import NavBar from '../../components/UserComponents/Layout/NavBar';
import UserCell from '../../components/UserComponents/Layout/UserCell';
import * as UI from './styles';

interface IUserLayoutProps {
  children: any;
}

const UserLayout: React.FC<IUserLayoutProps> = ({ children }) => {
  return(
    <UI.Layout>
      <Header />
      <UI.MainContent>
        <UI.LeftPart>
          <UserCell />
          <NavBar />
        </UI.LeftPart>
        <UI.MiddlePart>
          {children}
        </UI.MiddlePart>
        <UI.RightPart>
          
        </UI.RightPart>
      </UI.MainContent>
    </UI.Layout>
  );
};

export default UserLayout;