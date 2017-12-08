import { FETCH_LAST_FM, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LAST_FM:
    console.log(action);
      return { ...state, all: action };
    default:
      return state;
  }
}
