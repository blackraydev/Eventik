import React from 'react';
import { NavLink } from 'react-router-dom';
import { getIconByRoute, getTitleByRoute } from '../../../../../helpers/routeUtils';
import * as UI from './styles';

interface ICustomLinkProps {
  route: string;
  isActive?: boolean;
  onClick?: () => void;
}

const CustomLink: React.FC<ICustomLinkProps> = ({ route, isActive, onClick }) => {
  return (
    <UI.CustomLink isActive={isActive} onClick={onClick}>
      <NavLink to={route}>
        <UI.IconHolder>{getIconByRoute(route)}</UI.IconHolder>
        <UI.Title>{getTitleByRoute(route)}</UI.Title>
      </NavLink>
    </UI.CustomLink>
  );
};

export default CustomLink;
