import React from "react"
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <header className="text-center">
        <Link to="/">
            <h1>Our Space</h1>
        </Link>
        <nav className="flex-item">
          {this.props.children}
        </nav>
      </header>
    )
  }
}

export default Nav
