import { LOGIN, LOGOUT } from "../actions/users";

const initialState = {
  currentUser: null,
  isLoggedIn: false,
};

export default function authedUser(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        currentUser: action.payload,
        isLoggedIn: true,
      };
    case LOGOUT:
      return {
        ...state,
        currentUser: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
