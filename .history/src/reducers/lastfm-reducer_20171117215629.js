import { FETCH_LAST_FM, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LAST_FM:
    console.log(action.type);
      return { ...state, all: action.type.data };
    default:
      return state;
  }
}
