import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicPosts } from '../../actions/contentful';
import { fetchLastFm } from '../../actions/lastfm';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
    this.props.fetchLastFm();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.artist}</p>
        </article>
      );
    });
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Our Music</h2>
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { musicPosts: state.musicPosts.all };
}

export default connect(mapStateToProps, { fetchMusicPosts, fetchLastFm })(Music);
