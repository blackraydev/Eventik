import React from 'react';
import Header from '../../components/UserComponents/Layout/Header';
import NavBar from '../../components/UserComponents/Layout/NavBar';
import UserCell from '../../components/UserComponents/Layout/UserCell';
import * as UI from './styles';

interface IPrivateLayoutProps {
  children: any;
}

const PrivateLayout: React.FC<IPrivateLayoutProps> = ({ children }) => {
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

export default PrivateLayout;