import React from "react"
import { connect } from "react-redux"
import { addProfile } from "../store/actions/profile"
import '../styles/main.scss'

import SEO from "../components/seo";

import Layout from '../components/layout'
import DropSection from '../components/landing/dropSection'
import Testimonial from '../components/landing/testimonial'
import Cards from '../components/landing/cards'
import Figures from '../components/landing/figures'
import Videos from '../components/landing/videos'




const Home = props => {
  return (
    <Layout>
      <SEO title="Open job board" />
      <DropSection addProfile={props.addProfile} profile={props.profile} />
       <Testimonial />
      <Cards />
      <Testimonial reversed/>
      <Figures/>
     <Videos />
    </Layout>
  );
}

const mapStateToProps = state => ({
	profile: state.profile.profile,
  })

export default connect(mapStateToProps, { addProfile })(Home)