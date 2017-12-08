import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

var Spotify = require('spotify-web-api-js');

export function fetchLastFm(track, artist, album) {
  const request = axios.get(`${LAST_FM_API_URL}&api_key=${LAST_FM_API_KEY}&artist=${artist}&album=${album}&format=json`);
  const spotify = axios.get("https://api.spotify.com/v1/search?q=tania%20bowra&type=artist")
  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
