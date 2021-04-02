import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'
import logo from "../assets/images/logo.svg"

const Header = props => {
  return (

      <header className={headerStyles.header}>
        <nav className={headerStyles.navbar}>
          <Link to={"/"}>
            <img className={headerStyles.logo} src={logo} alt="Logo" />
          </Link>
        </nav>
        {props.jambotron && (
          <div className={headerStyles.jambotron}>
            <div className={headerStyles.jambotron__heading}>
              <h1 className="text-extra-large text-white">Fugiat excepteur ut dolore <br></br>esse labore mollit.</h1>
            </div>
          </div>
        )}
      </header>
  )
}

export default Header;