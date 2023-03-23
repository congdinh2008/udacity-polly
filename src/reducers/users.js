import { RECEIVE_USERS } from "../actions/users";
// usersReducer.js

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case "LOGIN":
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
