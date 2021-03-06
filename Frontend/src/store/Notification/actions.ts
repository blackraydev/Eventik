import { NotificationType } from '../../types/notificationType';
import { NOTIFICATION_ACTIONS } from './constants';

export const setNotification = (text: string, type: NotificationType) => ({
  type: NOTIFICATION_ACTIONS.SET_NOTIFICATION,
  payload: { text, type },
});

export const showNotification = () => ({
  type: NOTIFICATION_ACTIONS.SHOW_NOTIFICATION,
});

export const closeNotification = () => ({
  type: NOTIFICATION_ACTIONS.CLOSE_NOTIFICATION,
});

export default {
  setNotification,
  showNotification,
  closeNotification,
};
