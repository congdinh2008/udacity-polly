export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_USER_ANSWER = "RECEIVE_USERS";
export const ASSIGN_QUESTION = "RECEIVE_USERS";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const setUserAnswer = (id, authedUser, answer) => {
  return {
    type: SET_USER_ANSWER,
    id,
    authedUser,
    answer,
  };
}
export const assignQuestion = (author, id) => {
  return {
    type: ASSIGN_QUESTION,
    author,
    id,
  };
}