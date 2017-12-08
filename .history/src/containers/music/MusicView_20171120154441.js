import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom"
import { fetchMusicPosts } from '../../actions/contentful/music-posts';

var SpotifyWebApi = require('spotify-web-api-js');

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();


    var spotifyApi = new SpotifyWebApi({
      clientId: '746ce1bc33d446b284ea44020a4188f2',
      clientSecret: 'a72f916232b2499eb9b2cd119e6617c1',
    });

    spotifyApi.getArtistAlbums('43ZHCT0cAZBISjO8DG9PnE', function (err, data) {
      if (err) console.error(err);
      else console.log('Artist albums', data);
    });

  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      const data = post.fields
      return (
        <article key={index}>
          <h3>{data.title}</h3>
          <p>{data.artist}</p>
          <p>{data.album}</p>
          <Link to={`/music-post/${post.sys.id}`} className="nav-item">
            view
      </Link>
        </article>
      );
    });
  }
  render() {
    return (
      <div>
        <h2>Our Music</h2>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    musicPosts: state.musicPosts.all
  };
}

export default connect(mapStateToProps, { fetchMusicPosts })(Music);
