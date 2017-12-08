import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import Music from '../music'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import tracker from '../../utils/google-analytics';


const App = () => (
  <div className="container">
    <Nav>
      <Link to="/">
      <p></p>
      </Link>
      <Link to="/music">Music</Link>
    </Nav>
    <main>
      <Route exact path="/" component={tracker(Home)}/>
      <Route exact path="/music" component={tracker(Music)}/>
    </main>
    <Footer />
  </div>
);

export default App
