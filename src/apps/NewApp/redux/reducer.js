import { LOGOUT } from './actions';

const initialState = {
  user: null,
  token: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGOUT:
      return { ...initialState };
    default:
      return state;
  }
}
