import { FETCH_SINGLE_POST } from '../actions/constants';

export default function (state = {}, action) {
  switch (action.type) {
    case FETCH_SINGLE_POST:
    console.log(action.payload)
      return { ...state, post: action.payload.data.post };
    default:
      return state;
  }
}
