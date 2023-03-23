import { getInitialData } from "../apis/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import setAuthedUser from "./authedUser";
import { hideLoading, showLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export default function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
