import { ACTIONS } from "../../constants/redux";
import { NotificationType } from "../../types/notificationType";

export const setNotification = (text: string, type: NotificationType) => ({
  type: ACTIONS.SET_NOTIFICATION,
  payload: { text, type }
});

export const showNotification = () => ({
  type: ACTIONS.SHOW_NOTIFICATION
});

export const closeNotification = () => ({
  type: ACTIONS.CLOSE_NOTIFICATION
});

export default {
  setNotification,
  showNotification,
  closeNotification
};