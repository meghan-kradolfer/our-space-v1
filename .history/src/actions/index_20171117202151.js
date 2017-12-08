import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'buyxxxxxxx';
const API_TOKEN = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
