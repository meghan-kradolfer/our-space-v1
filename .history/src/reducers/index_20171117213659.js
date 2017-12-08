import { combineReducers } from 'redux';
import MusicPostsReducer from './music-posts-reducer';
import LastFmReducer from './lastfm-reducer';

const rootReducer = combineReducers({
  musicPosts: MusicPostsReducer,
  lastFmPosts: LastFmReducer
});

export default rootReducer;
