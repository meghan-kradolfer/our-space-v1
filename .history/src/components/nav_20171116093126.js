import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <header>
        <div className="flex-item">
          <img src="assets/img/logo.png" alt="Come Drink Stuff" />
        </div>
        <nav className="flex-item">
          {this.props.children}
        </nav>
      </header>
    )
  }
}

export default Nav
