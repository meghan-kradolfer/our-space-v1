import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicPosts } from '../../actions/contentful';
import { fetchLastFm } from '../../actions/lastfm';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      const data = post.fields;
      this.props.fetchLastFm(data.title, data.artist, data.album);
      console.log(this.props);
      return (
        <article key={post.sys.id}>
          <h3>{data.title}</h3>
          <p>{data.artist} {data.album}</p>
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
  console.log(state);
  return {
    musicPosts: state.musicPosts.all,
    lastFm: state.lastFmPosts
  };
}

export default connect(mapStateToProps, { fetchMusicPosts, fetchLastFm })(Music);
