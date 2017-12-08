import React, { Component } from 'react';
import { connect } from 'react-redux';
import MusicPost from "./post"
import { fetchMusicPosts } from '../../actions/contentful/music-posts';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      return (
        <article>
          <h3>{post.title}</h3>
          <p>{post.artist}</p>
          <p>{post.album}</p>
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
