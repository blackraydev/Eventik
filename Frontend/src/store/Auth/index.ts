import { ACTIONS } from "../../constants/redux";
import { IUser } from "../../models/IUser";
import { GAction } from "../../types/reduxTypes";

interface IAuthState {
  isAuth: boolean,
  user: IUser,
  isLoading: boolean,
  hasError: boolean
};

const initialState: IAuthState = {
  isAuth: false,
  user: {} as IUser,
  isLoading: false,
  hasError: false
};

type Action = 
  GAction<ACTIONS.REQUEST_DATA | ACTIONS.REQUEST_END | ACTIONS.REJECT_DATA> |
  GAction<ACTIONS.RECEIVE_DATA, { isAuth: boolean, user: IUser }>;

export default (
  state = initialState,
  action: Action
): IAuthState => {
  switch (action.type) {
    case ACTIONS.REQUEST_DATA:
      return { ...state, isLoading: true };
    case ACTIONS.RECEIVE_DATA:
      return { ...state, isAuth: action.payload.isAuth, user: action.payload.user };
    case ACTIONS.REJECT_DATA:
      return { ...state, isLoading: false, hasError: true };
    case ACTIONS.REQUEST_END:
      return { ...state, isLoading: false, hasError: false };
    default:
      return state;
  }
};