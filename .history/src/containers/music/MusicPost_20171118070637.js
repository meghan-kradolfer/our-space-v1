import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';
import { fetchPost } from '../../actions/contentful/post';

class MusicPost extends Component {
  componentWillMount() {
    const { match: { params } } = this.props;
    this.props.fetchPost(params.postId);
  }
  componentDidMount() {
    if(this.props.post) {
      console.log(this.props.post);
      this.props.fetchLastFm(this.props.post.title, this.props.post.artist, this.props.post.album);
    }

  }
  render() {
    console.log(this.props);
    const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;

    if(this.props.post) {
      return (
        <section>
           <h3>{this.props.post.title}</h3>
          <p>{this.props.post.artist} {this.props.post.album}</p>
          { album ? <img src={album.image[album.image.length - 1]['#text']} /> : 'dsf' }
        </section>
      );
    } else {
      return (
        <p>Nothing found</p>
      )
    }

  }
}

function mapStateToProps(state) {
  return {
    lastFm: state.lastFmPosts,
    post: state.post.post
  };
}

export default connect(mapStateToProps, { fetchLastFm, fetchPost })(MusicPost);
