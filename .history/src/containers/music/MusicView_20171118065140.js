import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMusicPosts } from '../../actions/contentful/music-posts';

class Music extends Component {
  componentWillMount() {
    this.props.fetchMusicPosts();
  }
  renderPosts() {
    return this.props.musicPosts.map((post, index) => {
      const data = this.props.fields
      return (
        <article>
          <h3>{data.title}</h3>
          <p>{data.artist}</p>
          <p>{data.album}</p>
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
  return {
    musicPosts: state.musicPosts.all
  };
}

export default connect(mapStateToProps, { fetchMusicPosts })(Music);
