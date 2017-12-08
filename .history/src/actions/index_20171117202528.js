import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = 'yiqk67ob7r63';
const API_TOKEN = 'CFPAT-1fe0c9eb81947e56c9883479954e24da6c892be7eaa37d9f294da20980dd5e8f';

export function fetchPosts() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_KEY}&content_type=post`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
