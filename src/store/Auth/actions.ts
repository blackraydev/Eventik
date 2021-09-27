import axios from "axios";
import { Dispatch } from "redux";
import { API_URL } from "../../constants/api";
import { ControllerNames } from "../../constants/controllerNames";
import { NotificationTypes } from "../../constants/notifications";
import { getErrorByStatusCode } from "../../helpers/errorUtils";
import { IAuthResponse } from "../../models/IAuthResponse";
import { IUser } from "../../models/IUser";
import AuthService from "../../services/authService";
import { receiveData, rejectData, requestData, requestEnd } from "../defaultActions";
import { setNotification, showNotification } from "../Notification/actions";

export const login = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(requestData());

    const response = await AuthService.login(email, password);
    localStorage.setItem('token', response.data.accessToken);

    dispatch(receiveData({ isAuth: true, user: response.data.user }));

    dispatch(requestEnd());    
  }
  catch (e: any) {
    const statusCode = e.response.status;

    dispatch(setNotification(getErrorByStatusCode(statusCode), NotificationTypes.ERROR));
    dispatch(showNotification());

    dispatch(rejectData());
  }
};

export const register = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(requestData());
    
    const response = await AuthService.register(email, password);
    localStorage.setItem('token', response.data.accessToken);

    dispatch(receiveData({ isAuth: true, user: response.data.user }));

    dispatch(requestEnd());    
  }
  catch (e) {
    console.log(e);
    dispatch(rejectData());
  }
};

export const logout = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(requestData());
    
    const response = await AuthService.logout();
    localStorage.removeItem('token');

    dispatch(receiveData({ isAuth: false, user: {} as IUser }));

    dispatch(requestEnd());    
  }
  catch (e) {
    console.log(e);
    dispatch(rejectData());
  }
};

export const checkAuth = () => async (
  dispatch: Dispatch
): Promise<void> => {
  try {
    dispatch(requestData());
    
    const response = await axios.get<IAuthResponse>(`${API_URL}${ControllerNames.TOKENS}/refresh`, { withCredentials: true });
    localStorage.setItem('token', response.data.accessToken);

    dispatch(receiveData({ isAuth: true, user: response.data.user }));

    dispatch(requestEnd());   
  }
  catch (e) {
    console.log(e);
    dispatch(rejectData());
  }
}

export default {
  login,
  register,
  logout,
  checkAuth
};