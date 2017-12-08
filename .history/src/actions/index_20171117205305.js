import axios from "axios";

export const FETCH_MUSIC_POSTS = "FETCH_MUSIC_POSTS";

const API_BASE_URL = "https://cdn.contentful.com";
const API_SPACE_ID = "yiqk67ob7r63";
const API_TOKEN = "851248871314b1e18a165b69cd54980a2d0e451d672011e6195a0aad1a233b3b";

export function fetchMusicPost() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_MUSIC_POSTS,
    payload: request
  };
}
