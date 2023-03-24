export const RECEIVE_USERS = "RECEIVE_USERS";
export const SET_USER_ANSWER = "SET_USER_ANSWER";
export const ASSIGN_QUESTION = "ASSIGN_QUESTION";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const receiveUsers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const setUserAnswer = ({qid, authedUser, answer}) => {
  return {
    type: SET_USER_ANSWER,
    qid,
    authedUser,
    answer,
  };
}
export const assignQuestion = ({author, id}) => {
  return {
    type: ASSIGN_QUESTION,
    author,
    id,
  };
}