export const RECEIVE_USERS = "RECEIVE_USERS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};
