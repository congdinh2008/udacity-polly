import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestion, saveQuestionAnswer } from "../apis/api";
import { assignQuestion, setUserAnswer } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const VOTE_QUESTION = "VOTE_QUESTION";
export const ADD_QUESTION = "ADD_QUESTION";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion(Object.assign({}, question, { authed: authedUser }))
      .catch((e) => {
        console.warn("Error saving a new question ", e);
      })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(assignQuestion(question))
      })
      .then(() => dispatch(hideLoading()));
  };
}

function voteQuestion({ qid, authedUser, answer }) {
  return {
    type: VOTE_QUESTION,
    qid,
    authedUser,
    answer,
  };
}

export function handleVoteQuestion(info) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    Object.assign(info, { authedUser: authedUser.currentUser.id });

    dispatch(voteQuestion(info));

    return saveQuestionAnswer(info).catch((e) => {
      console.warn("Error in vote question: ", e);
    }).then(()=>{
      console.log(info);
      dispatch(voteQuestion(info));
      dispatch(setUserAnswer(info));
    });
  };
}
