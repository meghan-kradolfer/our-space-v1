import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="flex-item">
          Our Place
        </div>
        <nav className="flex-item">
          {this.props.children}
        </nav>
      </header>
    )
  }
}

export default Nav
