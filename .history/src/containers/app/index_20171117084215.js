import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import Music from '../music'
import WhatWeDo from '../what-we-do'
import OurEvents from '../our-events'
import ContactUs from '../contact-us'
import Nav from '../../components/nav'
import Footer from '../../components/footer'
import tracker from '../../utils/google-analytics';


const App = () => (
  <div className="container">
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/music">Music</Link>
    </Nav>
    <main>
      <Route exact path="/" component={tracker(Home)}/>
      <Route exact path="/who-we-are" component={tracker(WhoWeAre)}/>
      <Route exact path="/what-we-do" component={tracker(WhatWeDo)}/>
      <Route exact path="/our-events" component={tracker(OurEvents)}/>
      <Route exact path="/contact-us" component={tracker(ContactUs)}/>
    </main>
    <Footer />
  </div>
);

export default App
