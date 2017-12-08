import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

export function fetchLastFm(track, artist, album) {
  console.log(track, artist, album);
  const request = axios.get(`${LAST_FM_API_URL}&api_key=${LAST_FM_API_KEY}&format=json`);
  console.log(request);
  // const request = axios.get(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`);
  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
