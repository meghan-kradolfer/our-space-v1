import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';

class MusicPost extends Component {
  componentWillMount() {
    const data = this.props.post.fields
    this.props.fetchLastFm(data.title, data.artist, data.album);
  }
  render() {
    const data = this.props.post.fields
    const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;

    console.log(album, data);
    return (
      <article key={this.props.post.sys.id}>
        <h3>{data.title}</h3>
        <p>{data.artist} {data.album}</p>
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
