import React from 'react';
import headerStyles from './header.module.scss'
import logo from "../assets/images/logo.svg"

const Header = () => {
  return (
      <header>
        <nav className={headerStyles.navbar}>
          <img src={logo} alt="Logo" />
        </nav>
        <div className={headerStyles.jambotron}>
          <h1></h1>
        </div>
      </header>
  )
}

export default Header;