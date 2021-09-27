import { ACTIONS } from "../../constants/redux";
import { INotification } from "../../models/INotification";
import { GAction } from "../../types/reduxTypes";

interface INotificationState {
  notification: INotification;
  toShow: boolean
};

const initialState: INotificationState = {
  notification: {} as INotification,
  toShow: false
};

type Action = 
  GAction<ACTIONS.SHOW_NOTIFICATION | ACTIONS.CLOSE_NOTIFICATION> |
  GAction<ACTIONS.SET_NOTIFICATION, INotification>;

export default (
  state = initialState,
  action: Action
): INotificationState => {
  switch (action.type) {
    case ACTIONS.SHOW_NOTIFICATION:
      return { ...state, toShow: true }
    case ACTIONS.SET_NOTIFICATION:
      return { ...state, notification: action.payload };
    case ACTIONS.CLOSE_NOTIFICATION:
      return { ...state, toShow: false };
    default:
      return state;
  }
};