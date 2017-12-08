import axios from "axios";
import { FETCH_LAST_FM, API_BASE_URL, API_SPACE_ID, API_TOKEN } from "../constants";

export function fetchLastFm() {
  const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_MUSIC_POSTS,
    payload: request
  };
}
