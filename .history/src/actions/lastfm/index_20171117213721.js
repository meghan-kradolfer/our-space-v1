import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

export function fetchLastFm() {
  const request = axios.get(`${LAST_FM_API_KEY}&api_key=${LAST_FM_API_URL}`);
  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
