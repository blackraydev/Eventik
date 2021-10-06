import { PrivateRoutes, PublicRoutes } from '../constants/routeNames';
import { IRoute } from '../models/IRoute';
import FriendsContainer from '../containers/PrivateContainers/FriendsContainer';
import ProfileContainer from '../containers/PrivateContainers/ProfileContainer';
import LoginContainer from '../containers/PublicContainers/LoginContainer';
import RegistrationContainer from '../containers/PublicContainers/RegistrationContainer';

export const publicRoutes: IRoute[] = [
  { path: PublicRoutes.LOGIN, exact: true, component: LoginContainer },
  { path: PublicRoutes.REGISTRATION, exact: true, component: RegistrationContainer },
];

export const privateRoutes: IRoute[] = [
  { path: PrivateRoutes.PROFILE, exact: true, component: ProfileContainer },
  { path: PrivateRoutes.FRIENDS, exact: true, component: FriendsContainer },
];