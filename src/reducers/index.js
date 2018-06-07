import { combineReducers } from 'redux';
import PostsReducer from './posts-reducer';
import PostReducer from './post-reducer';

const rootReducer = combineReducers({
  posts: PostsReducer,
  post: PostReducer
});

export default rootReducer;
