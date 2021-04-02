import React from "react"
import PropTypes from "prop-types"
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
const StyledBackdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9;
  transition: all 0.3s ease-in-out;
  display: ${({ open }) => (open ? "block" : "none")};
  @media (min-width: 1200px) {
    display: none;
  }
`

const StyledContainer = styled.div`
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  outline: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  visibility: ${({ open }) => (open ? "visible" : "hidden")};
  @media (min-width: 1200px) {
    display: none;
  }
`

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  height: 100vh;
  width: 55%;
  text-align: left;
  padding: 2rem;
  position: relative;
  right: 0;
  margin-left: auto;
  a {
    color: black;
  }
  .nav-link {
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    padding: 1.5rem 0;
    text-transform: uppercase;
  }
  .cta-btn {
    text-decoration: none;
    width: auto;
    height: auto;
    margin: 1.5rem auto;
    padding: 1rem 1.5rem;
    font-weight: 700;
    font-size: 1rem;
    border-radius: 5px;
    border: 0.125rem solid #47B881;
    background: #47B881;
    color: white;
    text-transform: uppercase;
  }
`

const Sidebar = ({ open, setOpen }) => {
  const { menu, button } = navLinks
  return (
    <>
      <StyledContainer open={open} aria-hidden={!open} tabIndex={open ? 1 : -1}>
        <StyledNav>
          {menu.map(({ name, url }, key) => (
            <Link className="nav-link" key={key} to={url} onClick={() => setOpen(!open)}>
              {name}
            </Link>
          ))}
          {/* <Link className="cta-btn" to={button.url} onClick={() => setOpen(!open)}>
            {button.name}
          </Link> */}
        </StyledNav>
      </StyledContainer>
      <StyledBackdrop open={open} />
    </>
  )
}

Sidebar.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}

export default Sidebar
