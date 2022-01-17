import React, { useCallback } from 'react';
import { useHistory } from 'react-router';
import { PrivateRoutes } from '../../../../constants/routeNames';
import { useActions } from '../../../../hooks/useActions';
import CustomLink from './CustomLink';
import * as UI from './styles';

interface INavBarProps {}

const NavBar: React.FC<INavBarProps> = () => {
  const { logout } = useActions();
  const history = useHistory();

  const isActiveLink = useCallback((route: string): boolean => {
    return history.location.pathname.includes(route);
  }, []);

  return (
    <UI.NavBar>
      {Object.values(PrivateRoutes).map((route, index) => (
        <CustomLink
          key={index}
          route={route}
          isActive={isActiveLink(route)}
          onClick={route === PrivateRoutes.LOGOUT ? logout : undefined}
        />
      ))}
    </UI.NavBar>
  );
};

export default NavBar;
