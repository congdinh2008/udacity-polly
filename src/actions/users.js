export const RECEIVE_USERS = "RECEIVE_USERS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

// userActions.js

export const loginUser = (user) => ({
  type: LOGIN,
  payload: user,
});

export const logoutUser = () => ({
  type: LOGOUT,
});

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};
