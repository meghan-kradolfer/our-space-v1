import React from "react";
import { Route, Link } from "react-router-dom"
import Home from "../home"
import Music from "../music/Music"
import Nav from "../../components/Nav"
import tracker from "../../utils/google-analytics";


const App = () => (
  <div className="container">
    <Nav>
      <Link to="/" className="nav-item">
        <strong>Ideas</strong>
        02
      </Link>
      <Link to="/music" className="nav-item">
        <strong>Music</strong>
        03
      </Link>
      <Link to="/music" className="nav-item">
        <strong>Life</strong>
        03
      </Link>
    </Nav>
    <main>
      <Route exact path="/" component={tracker(Home)} />
      <Route exact path="/music" component={tracker(Music)} />
    </main>
  </div>
);

export default App
