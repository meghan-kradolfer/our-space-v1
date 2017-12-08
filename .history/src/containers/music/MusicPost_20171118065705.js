import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';
import { fetchPost } from '../../actions/contentful/post';

class MusicPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.fetchPost(params.postId);
    // this.props.fetchLastFm(this.props.post.title, this.props.post.artist, this.props.post.album);
  }
  render() {
    console.log(this.props);
    const data = this.props.post
    const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;
    return (
      <section>
        <h3>{data.title}</h3>
        <p>{data.artist} {data.album}</p>
        { album ? <img src={album.image[album.image.length - 1]['#text']} /> : 'dsf' }
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    lastFm: state.lastFmPosts,
    post: state.post
  };
}

export default connect(mapStateToProps, { fetchLastFm, fetchPost })(MusicPost);
