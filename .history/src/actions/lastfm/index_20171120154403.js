import axios from "axios";
import { FETCH_LAST_FM, LAST_FM_API_KEY, LAST_FM_API_URL } from "../constants";

var SpotifyWebApi = require('spotify-web-api-js');

export function fetchLastFm(track, artist, album) {
  const request = axios.get(`${LAST_FM_API_URL}&api_key=${LAST_FM_API_KEY}&artist=${artist}&album=${album}&format=json`);

  var spotifyApi = new SpotifyWebApi({
    clientId : '746ce1bc33d446b284ea44020a4188f2',
    clientSecret : 'a72f916232b2499eb9b2cd119e6617c1',
  });

  spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function(err, data) {
    if (err) console.error(err);
    else console.log('Artist albums', data);
  });


  return {
    type: FETCH_LAST_FM,
    payload: request
  };
}
