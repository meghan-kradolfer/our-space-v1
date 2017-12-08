import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

export function fetchLastFm() {
  const request = axios.get(`${API_URL}&api_key=${API_KEY}`);
  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
