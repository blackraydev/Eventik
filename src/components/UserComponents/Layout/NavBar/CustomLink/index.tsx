import React from 'react';
import { NavLink } from 'react-router-dom';
import { getIconByRoute, getTitleByRoute } from '../../../../../helpers/routeUtils';
import * as UI from './styles';

interface ICustomLinkProps {
  route: string;
  isActive?: boolean;
}

const CustomLink: React.FC<ICustomLinkProps> = ({
  route,
  isActive
}) => {
  return (
    <UI.CustomLink isActive={isActive}>
      <NavLink to={route}>
        <UI.IconHolder>{getIconByRoute(route)}</UI.IconHolder>
        <UI.Title>{getTitleByRoute(route)}</UI.Title>
      </NavLink>
    </UI.CustomLink>
  );
}

export default CustomLink;
