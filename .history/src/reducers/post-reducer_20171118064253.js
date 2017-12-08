import { FETCH_POST } from '../actions/constants';

export default function (state = {}, action) {
  console.log(action.payload)
  switch (action.type) {
    case FETCH_POST:
      return { ...state, all: action.payload };
    default:
      return state;
  }
}
