import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MusicPost } from "./post"
import { fetchMusicPosts } from '../../actions/contentful';
import { fetchLastFm } from '../../actions/lastfm';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      return (
        <MusicPost post={post.fields} />>
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
    musicPosts: state.musicPosts.all,
    lastFm: state.lastFmPosts
  };
}

export default connect(mapStateToProps, { fetchMusicPosts, fetchLastFm })(Music);
