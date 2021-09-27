import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { PrivateRoutes } from '../../../../constants/routeNames';
import CustomLink from './CustomLink';
import * as UI from './styles';

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = () => {
  const history = useHistory();

  const isActiveLink = useCallback((route: string): boolean => {
    return history.location.pathname.includes(route);
  }, [history]);

  return(
    <UI.NavBar>
      {
        Object.values(PrivateRoutes).map(
          (route, index) => <CustomLink route={route} key={index} isActive={isActiveLink(route)}/>
        )
      }
    </UI.NavBar>
  );
};

export default NavBar;