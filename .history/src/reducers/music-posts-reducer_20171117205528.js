import { FETCH_MUSIC_POSTS } from '../actions/index';
const INITIAL_STATE = { all: [] };
export default function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case FETCH_MUSIC_POSTS:
      return { ...state, all: action.payload.data.items };
    default:
      return state;
  }
}
