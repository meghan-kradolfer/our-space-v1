import { FETCH_POSTS, API_SPACE_ID, API_TOKEN } from "../constants";
import { createClient } from 'contentful'

export function fetchPosts() {
  const client = createClient({
    accessToken: API_TOKEN,
    space: API_SPACE_ID
  });
  const entries = client.getEntries();
  return {
    type: FETCH_POSTS,
    payload: entries
  };
}
