import React from "react"
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="flex-item logo">
          <Link to="/">
            <h2>Our Place</h2>
          </Link>
        </div>
        <nav className="flex-item">
          {this.props.children}
        </nav>
      </header>
    )
  }
}

export default Nav
