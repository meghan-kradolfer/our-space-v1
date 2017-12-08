import { FETCH_LAST_FM, INITIAL_STATE } from '../actions/constants';

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_LAST_FM:
    console.log(action.payload);
    console.log('dsf');
      return { ...state, data: action.payload.data };
    default:
      return state;
  }
}
