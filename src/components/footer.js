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
    <footer class={footerStyles.section}>
      <div class={footerStyles.footer_top}>
        <img alt="mock 1" src={mock146x53} />
        <span class="text-medium text-bold-700 text-center">Ullamco eu dolor irure labore.</span>
      </div>
      <div class={footerStyles.divider}></div>
      <div class={footerStyles.footer_bot}>
          <div class={footerStyles.links}>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
            <a href="#">link</a>
          </div>
          <div class={footerStyles.socials}>
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