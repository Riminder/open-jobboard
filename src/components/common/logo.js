import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import logo from "../../assets/images/logo.jpg"


const StyledLogo = styled.img`
  position: relative;
  z-index: 13;
  width: 3.5rem;
  height: auto;
  /* Disable effects when sidebar is open */
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  //display: none;
`

const Logo = ({ size, color }) => (
  <StyledLogo src={logo} />

)

Logo.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
}

export default Logo
