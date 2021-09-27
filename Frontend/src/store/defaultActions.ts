import { ACTIONS } from "../constants/redux";

export const requestData = () => ({
  type: ACTIONS.REQUEST_DATA
});

export const receiveData = (payload: any) => ({
  type: ACTIONS.RECEIVE_DATA,
  payload: payload
});

export const rejectData = () => ({
  type: ACTIONS.REJECT_DATA
});

export const requestEnd = () => ({
  type: ACTIONS.REQUEST_END
});