import { combineReducers } from 'redux';
import MusicPostsReducer from './music-posts-reducer';

const rootReducer = combineReducers({
  musicPosts: MusicPostsReducer
});

export default rootReducer;
