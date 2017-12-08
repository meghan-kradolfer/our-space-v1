import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="flex-item logo">
          Our <br/> Place
        </div>
        <nav className="flex-item">
          {this.props.children}
          <p></p>
        </nav>
      </header>
    )
  }
}

export default Nav
