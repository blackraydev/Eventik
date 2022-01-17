import authActions from './Auth/actions';
import usersActions from './Users/actions';
import notificationActions from './Notification/actions';

export default {
  ...authActions,
  ...usersActions,
  ...notificationActions,
};
