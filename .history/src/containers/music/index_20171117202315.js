import React from "react";
import MusicPost from "../../components/music-post";
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';

const Music = () => (
  <div className="music">
    <h2>Our Music</h2>
    <MusicPost />
  </div>
);

export default Music
