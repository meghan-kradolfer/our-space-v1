import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicPosts } from '../../actions/index';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h3>{post.fields.songName}</h3>
          <p>{post.fields.description}</p>
        </article>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Blog Posts</h2>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { musicPosts: state.musicPosts.all };
}

export default connect(mapStateToProps, { fetchMusicPosts })(Music);
