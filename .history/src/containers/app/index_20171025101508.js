import React from 'react';
import {Route, Link} from 'react-router-dom'
import Home from '../home'
import WhoWeAre from '../who-we-are'
import WhatWeDo from '../what-we-do'
import OurEvents from '../our-events'
import ContactUs from '../contact-us'
import Header from '../../components/header'
import Footer from '../../components/footer'
import tracker from '../../utils/google-analytics';


const App = () => (
  <div>
    <Header>
      <Link to="/">Home</Link>
      <Link to="/who-we-are">Who we are</Link>
      <Link to="/what-we-do">What we do</Link>
      <Link to="/our-events">Our Events</Link>
      <Link to="/contact-us">Contact Us</Link>
    </Header>
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
