import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';
import { fetchPost } from '../../actions/contentful/post';
var SpotifyWebApi = require('spotify-web-api-node');
class MusicPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.fetchPost(params.postId);

    var spotifyApi = new SpotifyWebApi({
      clientId: '746ce1bc33d446b284ea44020a4188f2',
      clientSecret: 'a72f916232b2499eb9b2cd119e6617c1',
    });

    console.log(spotifyApi);

    console.log('Artist albums', data.body);
  }, function(err) {
    console.error(err);
  });

  }
  render() {
    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE').then(function(data) {

    if (this.props.post) {
      this.props.fetchLastFm(this.props.post.title, this.props.post.artist, this.props.post.album);
      const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;
      return (
        <section>
          {album ? <img src={album.image[album.image.length - 1]['#text']} /> : 'dsf'}
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.artist} {this.props.post.album}</p>
        </section>
      );
    } else {
      return (
        <p>Nothing found</p>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    lastFm: state.lastFmPosts,
    post: state.post.post
  };
}

export default connect(mapStateToProps, { fetchLastFm, fetchPost })(MusicPost);
