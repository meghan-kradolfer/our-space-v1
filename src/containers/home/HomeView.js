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

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }
  renderPosts(posts) {
    return posts.map((post, index) => {
      const data = post.fields;
      const image = data.image ? data.image.fields.file.url : '';
      return (
        <article key={index} className="summary col-2 music-post">
          {image ? (
            <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
          ) : ''}
          <div className="row text-center content">
            <h3>{post.sys.contentType.sys.id.replace(/([A-Z])/g, " $1")}</h3>
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
        <artcile className="summary col-4 start-post">
          <div className="row">
            <p>Hello, welcome to our space.</p>
            <h2>The Blog</h2>
          </div>
        </artcile>
        {this.renderPosts(this.props.posts)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  };
}

Home.propTypes = propTypes;

export default connect(mapStateToProps, { fetchPosts })(Home);
