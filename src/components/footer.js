import React from 'react';
import footerStyles from './footer.module.scss';
import linkedin from '../assets/images/linkedin.svg';
import twitter from '../assets/images/twitter.svg';
import facebook from '../assets/images/facebook.svg';
import youtube from '../assets/images/youtube.svg';
import instagram from '../assets/images/instagram.svg';
import mock146x53 from '../assets/images/mock146x53.png';


// import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className={footerStyles.section}>
      <div className={footerStyles.footer_top}>
        <img alt="mock 1" src={mock146x53} />
        <span className="text-medium text-bold-700 text-center">Ullamco eu dolor irure labore.</span>
      </div>
      <div className={footerStyles.divider}></div>
      <div className={footerStyles.footer_bot}>
          <div className={footerStyles.links}>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
          </div>
          <div className={footerStyles.socials}>
            <a href="#" target="blank"><img alt="linkedin" src={linkedin} /></a>
            <a href="#" target="blank"><img alt="facebook" src={facebook} /></a>
            <a href="#" target="blank"><img alt="twitter" src={twitter} /></a>
            <a href="#" target="blank"><img alt="youtube" src={youtube} /></a>
            <a href="#" target="blank"><img alt="instagram" src={instagram} /></a>
        </div>
      </div>
  </footer>
  )
}

export default Footer;