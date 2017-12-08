import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';

class MusicPost extends Component {
  componentWillMount() {
    this.props.fetchLastFm(this.props.post.title, this.props.post.artist, this.props.post.album);
  }
  render() {
    const data = this.props.post
    const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;

    console.log(album, data);
    return (
      <article>
        <h3>{data.title}</h3>
        <p>{data.artist} {data.album}</p>
        { album ? <img src={album.image[album.image.length - 1]['#text']} /> : 'dsf' }
      </article>
    );
  }
}

function mapStateToProps(state) {
  return {
    lastFm: state.lastFmPosts
  };
}

export default connect(mapStateToProps, { fetchLastFm })(MusicPost);
