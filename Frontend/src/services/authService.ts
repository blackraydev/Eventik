import { AxiosResponse } from "axios";
import api from "../api";
import { ControllerNames } from "../constants/controllerNames";
import { IAuthResponse } from "../models/IAuthResponse";

export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return api.post(`${ControllerNames.USERS}/login`, { email, password });
  };

  static async register(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return api.post(`${ControllerNames.USERS}/register`, { email, password });
  };

  static async logout(): Promise<void> {
    return api.post(`${ControllerNames.USERS}/logout`);
  };
};
