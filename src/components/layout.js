import React from 'react';
import Header from './header';
import Footer from './footer';

const Layout = (props) => {
  return (
    <div>
        <Header jambotron={props.jambotron}/>
        {props.children}
        <Footer />
    </div>
  )
}

export default Layout;