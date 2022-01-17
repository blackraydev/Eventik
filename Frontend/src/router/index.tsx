import { PrivateRoutes, PublicRoutes } from '../constants/routeNames';
import { IRoute } from '../models/IRoute';
import PeoplePage from '../pages/PrivatePages/PeoplePage';
import ProfilePage from '../pages/PrivatePages/ProfilePage';
import LoginPage from '../pages/PublicPages/LoginPage';
import RegistrationPage from '../pages/PublicPages/RegistrationPage';

export const publicRoutes: IRoute[] = [
  { path: PublicRoutes.LOGIN, exact: true, component: LoginPage },
  { path: PublicRoutes.REGISTRATION, exact: true, component: RegistrationPage },
];

export const privateRoutes: IRoute[] = [
  { path: PrivateRoutes.PROFILE, exact: true, component: ProfilePage },
  { path: PrivateRoutes.PEOPLE, exact: true, component: PeoplePage },
];
