import { LOGIN, LOGOUT } from "./users";

export const SET_AUTHED_USER = "SET_AUTHED_USER";

export const loginUser = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});