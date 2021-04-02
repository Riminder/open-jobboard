import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

import { detectMobileAndTablet, isSSR } from "../../utils/utils"
import ContentWrapper from "./contentWrapper"
import Sidebar from "./sidebar"
import Navbar from "./navbar"
import Logo from "./logo"

const StyledHeader = motion.custom(styled.header`
  width: 100%;
  height: 5.25rem;
  background: white;
`)

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
const StyledBurger = styled.button`
  z-index: 12;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;

  &:focus {
    outline: none;
  }

  @media (min-width: 1200px) {
    display: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: black;
    border-radius: 0.625rem;
    transition: all 0.3s ease-in-out;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`

const BurgerNav = () => {
  const [open, setOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)

  
  useEffect(() => {
    let handleWindowSizeChange
    // if (isSSR) is necessary to prevent error during the gatsby build
    if (!isSSR) {
      handleWindowSizeChange = () => setWindowWidth(window.innerWidth)
      // set initial innerWidth when component mounts
      setWindowWidth(window.innerWidth)
    }
    // Add event listener to update windowWidth in state
    window.addEventListener("resize", handleWindowSizeChange)
    return () => window.removeEventListener("resize", handleWindowSizeChange)
  }, [windowWidth])

  // Required for animation - start after the splashScreen sequence is done
  const controls = useAnimation()
  

  let navigation
  if (detectMobileAndTablet(windowWidth)) {
    navigation = (
      <>
        <StyledBurger
          aria-controls="sidebar"
          open={open}
          onClick={() => setOpen(!open)}
        >
          <div />
          <div />
          <div />
        </StyledBurger>
        <Sidebar id="sidebar" open={open} setOpen={setOpen} />
      </>
    )
  } else {
    navigation = <Navbar />
  }

  return (
    <StyledHeader>
      {/* add blur class to body when sidebar is opened */}
      <Helmet bodyAttributes={{ class: open ? "blur" : "" }} />
      <StyledContentWrapper>
        <Link to="/" aria-label="home">
          <Logo color="primary" size="2rem" />
        </Link>
        {navigation}
      </StyledContentWrapper>
    </StyledHeader>
  )
}

export default BurgerNav
