import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const navLinks = {
  menu: [
    {
      name: "Accueil",
      url: "/",
    },
    {
      name: "Nos offres",
      url: "/jobs",
    },
  ],
  button: {
    name: "Faire un CV",
    url: "http://open-profile.cvbox.com/",
  },
};

const StyledNav = styled.nav`
  display: none;
  @media (min-width: 1200px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 43.25rem;
    background: white;
    a {
      color: black;
    }
  }
  .nav-link {
    text-transform: uppercase;
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    position: relative;
    margin: 0 0 0 2.25rem;
    padding: 0;
    &::before {
      transition: 200ms ease-out;
      height: 0.1563rem;
      content: "";
      position: absolute;
      background-color: #0af;
      width: 0%;
      bottom: -0.125rem;
    }
    &:hover::before {
      width: 100%;
    }
  }
  .cta-btn {
    text-transform: uppercase;
    text-decoration: none;
    width: auto;
    height: auto;
    font-weight: 700;
    border-radius: 5px;
    border: 0.125rem solid #47B881;
    background: #47B881;
    transition: 20ms ease-out;
    font-size: 1rem;
    padding: 0.5rem 1.5rem;
    margin: 0;
    color: white;
    &:hover {
      background: #47B881;
      color: white;
    }
  }
`

const Navbar = () => {
  const { menu, button } = navLinks
  return (
    <StyledNav>
      {menu.map(({ name, url }, key) => {
        return (
          <Link className="nav-link" key={key} to={url}>
            {name}
          </Link>
        )
      })}
      {/* <a className="cta-btn" href={button.url}>
        {button.name}
      </a> */}
    </StyledNav>
  )
}

export default Navbar
