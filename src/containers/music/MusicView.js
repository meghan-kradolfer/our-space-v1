import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Moment from 'moment';
import { fetchPosts } from '../../actions/contentful/posts';

const propTypes = {
  posts: PropTypes.array,
  fetchPosts: PropTypes.func
};

class Music extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return this.props.posts.map((post, index) => {
      const data = post.fields;
      const image = data.image ? data.image.fields.file.url : '';
      return (
        <article key={index} className="summary col-3">
          {image ? (
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
          ) : ''}
          <div className={`row text-center content ${image ? 'small' : ''}`}>
            <h3>Music</h3>
            <strong>{data.title}</strong>
            <p>{data.artist}</p>
          </div>
          <div className="row">
            <div className="col-6">
              <p>{Moment(post.sys.createdAt).format("MMMM D, YYYY")}</p>
            </div>
            <div className="col-6 text-right">
              <strong><Link to={`/music-post/${post.sys.id}`} className="nav-item">View More...</Link></strong>
            </div>
          </div>
        </article>
      );
    });
  }
  render() {
    return (
      <div className="posts row">
        {this.renderPosts()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

Music.propTypes = propTypes;

export default connect(mapStateToProps, { fetchPosts })(Music);
