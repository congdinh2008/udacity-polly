import { getInitialData } from "../apis/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { hideLoading, showLoading } from "react-redux-loading-bar";


export default function handleReceiveData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      dispatch(hideLoading());
    });
  };
}
