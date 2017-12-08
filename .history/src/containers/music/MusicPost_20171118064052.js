import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLastFm } from '../../actions/lastfm';

class MusicPost extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;

    axios.get(`/api/users/${params.userId}`)
      .then(({ data: user }) => {
        console.log('user', user);

        this.setState({ user });
      });
  }
  componentWillMount() {
    this.props.fetchLastFm(this.props.post.title, this.props.post.artist, this.props.post.album);
  }
  render() {
    const data = this.props.post
    const album = this.props.lastFm.data ? this.props.lastFm.data.album : false;

    console.log(album, data);
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
  console.log(this.props)
  return {
    lastFm: state.lastFmPosts,
    post: state.post
  };
}

export default connect(mapStateToProps, { fetchLastFm, fetchPost })(MusicPost);
