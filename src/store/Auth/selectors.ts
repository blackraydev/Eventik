import { IReduxState } from "..";

export const authCheckSelector = (state: IReduxState) => state.authReducer.isAuth;
export const authUserSelector = (state: IReduxState) => state.authReducer.user;
export const authLoadingSelector = (state: IReduxState) => state.authReducer.isLoading;
export const authErrorSelector = (state: IReduxState) => state.authReducer.hasError;